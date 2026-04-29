#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
详细对比Excel和网站数据
"""

import pandas as pd
import re

def main():
    # 读取Excel文件
    df = pd.read_excel('泉风轴流风机参数2026-5(1).xlsx', header=0)
    
    excel_models = []
    for idx, row in df.iterrows():
        model = str(row.iloc[0]).strip() if pd.notna(row.iloc[0]) else ''
        if model:
            excel_models.append(model)
    
    # 读取网站数据文件
    with open('src/quanfeng/lib/productData.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取网站中的所有型号
    variant_pattern = r"model:\s*'([^']+)'"
    website_models = re.findall(variant_pattern, content)
    
    print("="*70)
    print("详细对比检查")
    print("="*70)
    
    print(f"\nExcel中的型号数量: {len(excel_models)}")
    print(f"网站中的型号数量: {len(website_models)}")
    
    # 转换为集合进行对比
    excel_set = set(excel_models)
    website_set = set(website_models)
    
    # 检查Excel中有但网站中没有的
    missing_in_website = excel_set - website_set
    if missing_in_website:
        print(f"\n❌ Excel中有但网站中没有的型号 ({len(missing_in_website)}个):")
        for m in sorted(missing_in_website):
            print(f"   - {m}")
    else:
        print("\n✅ Excel中的所有型号都已在网站中")
    
    # 检查网站中有但Excel中没有的
    extra_in_website = website_set - excel_set
    if extra_in_website:
        print(f"\n⚠️ 网站中有但Excel中没有的型号 ({len(extra_in_website)}个):")
        for m in sorted(extra_in_website):
            print(f"   - {m}")
    else:
        print("✅ 网站中没有多余的型号")
    
    # 检查顺序是否一致
    print("\n" + "="*70)
    print("型号对比（Excel vs 网站）")
    print("="*70)
    
    max_len = max(len(excel_models), len(website_models))
    mismatch_count = 0
    
    for i in range(max_len):
        excel_model = excel_models[i] if i < len(excel_models) else 'N/A'
        website_model = website_models[i] if i < len(website_models) else 'N/A'
        
        status = "✅" if excel_model == website_model else "❌"
        if excel_model != website_model:
            mismatch_count += 1
        
        print(f"{i+1:2d}. {status} Excel: {excel_model:18s} | 网站: {website_model:18s}")
    
    print("\n" + "="*70)
    if mismatch_count == 0:
        print(f"✅ 所有型号完全匹配，顺序一致！")
    else:
        print(f"❌ 发现 {mismatch_count} 处不匹配")
    print("="*70)

if __name__ == '__main__':
    main()
