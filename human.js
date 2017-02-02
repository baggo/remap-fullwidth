var keys = ' 0123456789!"#$%&\'()*+,-./,;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
var vals = '　０１２３４５６７８９！＂＃＄％＆＇（）＊＋，－．／:；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～'

var result = {}
for (var i = 0, max = keys.length; i < max; i++)
  result[keys[i]] = vals[i]
console.log(JSON.stringify(result))
