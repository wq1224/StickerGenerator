# StickerGenerator
 > 释聚文化小贴士生成器

## 简介
有小贴士若干条，需要每周周一到周五循环生成日期+贴士。

使用react + webpack

## 使用方法
> npm install

> npm start

访问 http://localhost:3333/main.html。 或者

> npm run build

打包出资源放入服务器中。

## react webpack配置参考
参考1: https://blog.csdn.net/dengdengda/article/details/77892052

参考2:  https://www.cnblogs.com/feiying100/p/6655663.html

参考3:  https://www.cnblogs.com/zamhown/p/6428050.html

## 文字长度适配
小贴士有长有短，根据试验，对题目和解答整体文字长度的大小，分配了大，中，小三种字体，对于题目的长度大小，自动调整解答的起始高度。参见js/show.js。

## html转图片工具
试用了 html-to-image, dom-to-image和html2canvas 3个库， html-to-image不能加载字体，dom-to-image不适用于safari，html2canvas比较完美。

## 字库压缩
使用font-spider工具。事先将所有需要用到的字符写入testfont.html里，并引入字体库，然后用font-spider解析该出需要的字，进行压缩

> npm run font-spider *.html --debug

run完以后原字体文件就被替换成了压缩文件

## 小贴士和日期的匹配
取2019.3.25作为初始值，这天取第39条小贴士(下标为38)，比较选择的时间和初始值的距离，也就是天数。把小贴士列表想象成循环列表，初始值（第39条）加上距离对列表长度取模即可。
针对每周双休不发，只有工作日需要，对于距离的计算要先除以7再乘5。
代码如下：
```
    getSuggestData(date){
        const baseDay = new Date(2019,2,25);
        const baseData = 38;
        const diff = Math.abs(date.getTime() - baseDay.getTime());
        let distance = parseInt(diff / (1000 * 60 * 60 * 24));
        distance = (parseInt(distance / 7)) * 5 + (distance % 7);
        const total = baseData + distance ;
        return total % data.length;
    }
```

