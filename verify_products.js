// 验证构建输出中包含的产品系列数量
const fs = require('fs');
const path = require('path');

// 读取ProductShowcase组件的编译后代码
const chunksDir = path.join(__dirname, 'out', '_next', 'static', 'chunks');
const files = fs.readdirSync(chunksDir);

// 期望的产品系列
const expectedSeries = [
  'qa8025', 'qa9225', 'qa11025', 'qa12025', 'qa12038', 
  'qa13538', 'qa15050', 'qa17250', 'qa18060', 'qa20060',
  'qa22580', 'qa22090', 'qa28080'
];

console.log('期望的产品系列:', expectedSeries.length, '个');
console.log(expectedSeries.join(', '));
console.log('\n检查构建输出文件...\n');

// 检查每个chunk文件
let foundSeries = new Set();
let foundVariants = new Set();

files.forEach(file => {
  if (file.endsWith('.js')) {
    const content = fs.readFileSync(path.join(chunksDir, file), 'utf-8');
    
    // 检查系列ID
    expectedSeries.forEach(series => {
      if (content.includes(series) || content.includes(series.toUpperCase())) {
        foundSeries.add(series);
      }
    });
    
    // 检查具体型号
    ['QA18060HBL1', 'QA20060HBL1', 'QA22580HBL2D', 'QA22090YHBL2D', 'QA28080HBL2D'].forEach(model => {
      if (content.includes(model)) {
        foundVariants.add(model);
      }
    });
  }
});

console.log('找到的产品系列:', foundSeries.size, '个');
console.log([...foundSeries].sort().join(', '));

console.log('\n找到的具体型号:', foundVariants.size, '个');
[...foundVariants].sort().forEach(m => console.log('  -', m));

const missingSeries = expectedSeries.filter(s => !foundSeries.has(s));
if (missingSeries.length > 0) {
  console.log('\n❌ 缺少的系列:', missingSeries.length, '个');
  missingSeries.forEach(s => console.log('  -', s));
} else {
  console.log('\n✅ 所有系列都存在于构建输出中！');
}

// 检查HTML文件
console.log('\n\n检查HTML文件中的系列按钮...');
const cnIndexPath = path.join(__dirname, 'out', 'cn', 'index.html');
if (fs.existsSync(cnIndexPath)) {
  const htmlContent = fs.readFileSync(cnIndexPath, 'utf-8');
  let htmlFoundSeries = 0;
  expectedSeries.forEach(series => {
    if (htmlContent.includes(series) || htmlContent.includes(series.toUpperCase())) {
      htmlFoundSeries++;
    }
  });
  console.log('HTML中找到的系列:', htmlFoundSeries, '/', expectedSeries.length);
}
