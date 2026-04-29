#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
对比Excel文件和网站产品数据，检查是否有遗漏、缺失、错排
"""

import pandas as pd
import re
from collections import defaultdict

def get_excel_data():
    """从Excel文件读取数据"""
    df = pd.read_excel('泉风轴流风机参数2026-5(1).xlsx', header=0)
    
    excel_models = set()
    excel_data = {}
    
    for idx, row in df.iterrows():
        model = str(row.iloc[0]).strip()
        voltage = str(row.iloc[1]).strip().replace('AC', '')
        power = str(row.iloc[2]).strip()
        frequency = str(row.iloc[3]).strip()
        current = str(row.iloc[4]).strip()
        speed = str(row.iloc[5]).strip()
        airflow = str(row.iloc[6]).strip()
        noise = str(row.iloc[7]).strip()
        
        excel_models.add(model)
        excel_data[model] = {
            'voltage': voltage,
            'power': power,
            'frequency': frequency,
            'current': current,
            'speed': speed,
            'airflow': airflow,
            'noise': noise
        }
    
    return excel_models, excel_data

def get_website_data():
    """从网站产品数据文件读取"""
    with open('src/quanfeng/lib/productData.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取所有型号
    variant_pattern = r"model:\s*'([^']+)'"
    variants = re.findall(variant_pattern, content)
    
    website_models = set(variants)
    
    return website_models

def check_descriptions():
    """检查多语言描述是否完整"""
    with open('src/quanfeng/lib/productData.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取产品描述中的系列ID
    desc_pattern = r"(\w+):\s*{\s*zh:"
    desc_series = set(re.findall(desc_pattern, content))
    
    # 提取产品特性中的系列ID
    feat_pattern = r"(\w+):\s*{\s*zh:\s*\["
    feat_series = set(re.findall(feat_pattern, content))
    
    # 提取productSeries中的系列ID
    series_pattern = r"id:\s*'([^']+)'"
    series_ids = set(re.findall(series_pattern, content))
    
    return desc_series, feat_series, series_ids

def main():
    print("="*70)
    print("产品数据对比检查")
    print("="*70)
    
    # 1. 读取Excel数据
    excel_models, excel_data = get_excel_data()
    print(f"\n【Excel文件】共有 {len(excel_models)} 个型号")
    
    # 2. 读取网站数据
    website_models = get_website_data()
    print(f"【网站数据】共有 {len(website_models)} 个型号")
    
    # 3. 对比差异
    print("\n" + "="*70)
    print("差异检查")
    print("="*70)
    
    # Excel中有但网站中没有的
    missing_in_website = excel_models - website_models
    if missing_in_website:
        print(f"\n❌ 遗漏：Excel中有但网站中没有的型号 ({len(missing_in_website)}个):")
        for m in sorted(missing_in_website):
            print(f"   - {m}")
    else:
        print("\n✅ Excel中的所有型号都已在网站中")
    
    # 网站中有但Excel中没有的
    extra_in_website = website_models - excel_models
    if extra_in_website:
        print(f"\n⚠️ 多余：网站中有但Excel中没有的型号 ({len(extra_in_website)}个):")
        for m in sorted(extra_in_website):
            print(f"   - {m}")
    else:
        print("✅ 网站中没有多余的型号")
    
    # 4. 检查多语言描述
    print("\n" + "="*70)
    print("多语言描述检查")
    print("="*70)
    
    desc_series, feat_series, series_ids = check_descriptions()
    
    print(f"\n产品系列总数: {len(series_ids)}")
    print(f"有描述的系列: {len(desc_series)}")
    print(f"有特性的系列: {len(feat_series)}")
    
    # 检查是否有系列缺少描述
    missing_desc = series_ids - desc_series
    if missing_desc:
        print(f"\n❌ 缺少多语言描述的系列 ({len(missing_desc)}个):")
        for s in sorted(missing_desc):
            print(f"   - {s}")
    else:
        print("\n✅ 所有系列都有多语言描述")
    
    # 检查是否有系列缺少特性
    missing_feat = series_ids - feat_series
    if missing_feat:
        print(f"\n❌ 缺少多语言特性的系列 ({len(missing_feat)}个):")
        for s in sorted(missing_feat):
            print(f"   - {s}")
    else:
        print("✅ 所有系列都有多语言特性")
    
    # 5. 检查描述和特性中有多余的系列
    extra_desc = desc_series - series_ids
    if extra_desc:
        print(f"\n⚠️ 描述中有但产品系列中不存在的 ({len(extra_desc)}个):")
        for s in sorted(extra_desc):
            print(f"   - {s}")
    
    extra_feat = feat_series - series_ids
    if extra_feat:
        print(f"\n⚠️ 特性中有但产品系列中不存在的 ({len(extra_feat)}个):")
        for s in sorted(extra_feat):
            print(f"   - {s}")
    
    # 6. 按系列统计
    print("\n" + "="*70)
    print("按系列统计")
    print("="*70)
    
    excel_groups = defaultdict(list)
    for m in excel_models:
        match = re.match(r'(QA\d+)', m)
        if match:
            excel_groups[match.group(1).upper()].append(m)
    
    website_groups = defaultdict(list)
    for m in website_models:
        match = re.match(r'(QA\d+)', m)
        if match:
            website_groups[match.group(1).upper()].append(m)
    
    all_series = set(excel_groups.keys()) | set(website_groups.keys())
    
    print(f"\n{'系列':<12} {'Excel':<8} {'网站':<8} {'状态':<10}")
    print("-" * 50)
    for s in sorted(all_series):
        excel_count = len(excel_groups.get(s, []))
        website_count = len(website_groups.get(s, []))
        if excel_count == website_count:
            status = "✅ 一致"
        elif excel_count > website_count:
            status = f"❌ 缺{excel_count-website_count}个"
        else:
            status = f"⚠️ 多{website_count-excel_count}个"
        print(f"{s:<12} {excel_count:<8} {website_count:<8} {status:<10}")
    
    print("\n" + "="*70)
    print("检查完成")
    print("="*70)

if __name__ == '__main__':
    main()
