
//获取应用实例

const app = getApp()
Page({
 
  /**
   * 页面的初始数据
   */

  data: {
    type: "",
    session: [{
      name: '1号场',
      id: 1
    },
    {
      name: '2号场',
      id: 2
    },
    {
      name: '3号场',
      id: 1
    },
    {
      name: '4号场',
      id: 2
    },
    ],
    /**
     * 选中的位置
     */
    list: [],
    /**
     * status 
     * 1 可预订 
     * 2 已售完 
     * 3 已选择 
     */
    date: [],
    obj: [
      [
        [{ 
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        ], //第一行0
  
        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第二行1
  
        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第三行2

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第四行3

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第五行4

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第六行5

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第七行6

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第八行7

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第九行8

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十行9

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十一行10

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十二行11

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        ], //第十三行12
      ], // 第一天
      [
        [{ 
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        ], //第一行0
  
        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第二行1
  
        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第三行2

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第四行3

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第五行4

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第六行5

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第七行6

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第八行7

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第九行8

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十行9

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十一行10

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十二行11

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        ], //第十三行12
      ], // 第二天
      [
        [{ 
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        ], //第一行0
  
        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第二行1
  
        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第三行2

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第四行3

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第五行4

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第六行5

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第七行6

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第八行7

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第九行8

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十行9

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十一行10

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十二行11

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        ], //第十三行12
      ], // 第三天
      [
        [{ 
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        ], //第一行0
  
        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第二行1
  
        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第三行2

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第四行3

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第五行4

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第六行5

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第七行6

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第八行7

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第九行8

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十行9

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十一行10

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十二行11

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        ], //第十三行12
      ], // 第四天
      [
        [{ 
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        ], //第一行0
  
        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第二行1
  
        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第三行2

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第四行3

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第五行4

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第六行5

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第七行6

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第八行7

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第九行8

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十行9

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十一行10

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十二行11

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        ], //第十三行12
      ], // 第五天
      [
        [{ 
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        ], //第一行0
  
        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第二行1
  
        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第三行2

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第四行3

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第五行4

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第六行5

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第七行6

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第八行7

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第九行8

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十行9

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十一行10

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十二行11

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        ], //第十三行12
      ], // 第六天
      [
        [{ 
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        ], //第一行0
  
        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第二行1
  
        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第三行2

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          
        ], //第四行3

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第五行4

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第六行5

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第七行6

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第八行7

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第九行8

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十行9

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十一行10

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        
        ], //第十二行11

        [{
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
          {
            "status": 1,
            "price": 60
          },
        ], //第十三行12
      ] // 第七天
    ],
    time: [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ],
 
    area: [
      "1号场",
      "2号场",
      "3号场",
      "4号场",
     
    ],
    j: null,
    submitTitle: '未选定场地',
    /**
     * 日期选中
     */
    datePosition: 0,
    /**
     * 场次选中
     */
    sessionPosition: 0,
    /**
     * 上拖动效果越界
     */
    offsetTop: 0,
    /**
     * 做拖动效果越界
     */
    offsetLeft: 0,
    /**
     * 调整左边的滚动条位置
     */
    left: 0,
    /**
     * 调整上的滚动条位置
     */
    top: 0,
    /**
     * 选座区域最小高度
     */
    min: 200,
    /**
     * 选座区域最大高度
     */
    max: 1500,
 
    /**
     * 场地价格
     */
    price: 0,
  },

  onShow: function () {
    this.syncTime()
    this.getVenue()
  },

  getVenue:function(){ //利用数据库更新场地情况
    for (var j=0;j<7;j++){
      this.get(j)
    }
  },

  syncTime:function(){
    var d = new Date()
    //console.log("日期:",d)
    var hour = d.getHours()-9
    var todayIndex=0;
    console.log("hour:",hour)
    if (hour >= 0&&hour<=13){
      for(var i=0;i<hour;i++){
        for (var j=0;j<4;j++){
          this.data.obj[todayIndex][i][j].status = 2
        }
      }
      this.setData({
        obj : this.data.obj
      })
    } else if (hour > 13){
      for(var k=0;k<13;k++){
        for (var l=0;l<4;l++){
          this.data.obj[0][k][l].status = 2
        }
      }
      this.setData({
        obj : this.data.obj
      })
    }
  },

  get:function(j){
    wx.request({
      url:'http://175.27.138.218:8080/luyu/ground/listground',
      data:{
        name:this.data.type,
        todayTime:this.data.date[j].subTitle
      },
      success:(res) => {
        var slot
        var ground_num
        console.log("todayTime", this.data.date[j].subTitle)
        console.log(res);
        var result
        for(var i = 0;i<res.data.length;i++){
          if(res.data[i].status==1){
            slot = res.data[i].orderSlot.split("-")
            ground_num = res.data[i].num-1
            console.log(res.data[i].orderSlot)
            console.log(slot[0]-9)
            console.log(ground_num)
            this.data.obj[j][slot[0]-9][ground_num].status = 2
            result = this.data.obj
            this.setData({
              obj : result
            })
          }
        }
      },
      fail:() => {
        console.log("fail");
      },
    })
  },

  // 处理未来七天的函数
  dealTime: function (num) {     // num：未来天数
    var time = new Date()     // 获取当前时间日期
    var date = new Date(time.setDate(time.getDate() + num)).getDate()  //这里先获取日期，在按需求设置日期，最后获取需要的
    var month = time.getMonth() + 1   // 获取月份
    if (month < 10){
      month = month+""
      month = "0"+month
    }else{
      month = month+""
    }
    //console.log("month类型是:"+typeof month)
    var year = time.getFullYear() // 获取年份
    var day = time.getDay()   // 获取星期
    switch (day) {             // 格式化
      case 0: day = "周日"
        break
      case 1: day = "周一"
        break
      case 2: day = "周二"
        break
      case 3: day = "周三"
        break
      case 4: day = "周四"
        break
      case 5: day = "周五"
        break
      case 6: day = "周六"
        break
    }
    var day_date = {
      title: day,
      subTitle: year+"-"+month+"-"+date
    }
    return day_date      // 返回对象
  },

  switchTab:function(e){
    this.setData({
     currentTab:e.detail.current
    });
    this.checkCor();
   },
   // 点击标题切换当前页时改变样式
   swichNav:function(e){
    var cur=e.target.dataset.current;
    if(this.data.currentTaB==cur){return false;}
    else{
     this.setData({
      currentTab:cur
     })
    }
   },
   //判断当前滚动超过一屏时，设置tab标题滚动条。
   checkCor:function(){
    if (this.data.currentTab>4){
    this.setData({
     scrollLeft:300
    })
    }else{
    this.setData({
     scrollLeft:0
    })
    }
   },
  /**
   * 确认订单
   */
  
  confirm: function(e) {
    if (this.data.price <= 0) {
      wx.showToast({
        title: '最少选择1场',
        icon: 'none',
        duration: 2000
      })
      return
    }
 
 
    var session = this.data.session[this.data.sessionPosition].name
    var date = this.data.date[this.data.datePosition].subTitle
    // console.log(session)
    // console.log(date)
    // console.log(this.data.list)
    var data = {
      allPrice: this.data.price,
      session: session,
      date: date,
      list: this.data.list
    }
    wx.navigateTo({
      url: '../placeSubmit/placeSubmit?data=' + JSON.stringify(data),
    })
  },
  click(e){
    var cal;
    console.log(e.detail.cal)
    this.setData({
      cal:e.detail.cal
    })
  },
     

  /**
   * 选择日期
   */
  chooseDate: function(e) {
    var d = new Date()
    console.log("choose time:", d.getTime())
    var index = parseInt(e.currentTarget.id)
    console.log("index in chooseDate:", index)
    this.setData({
      datePosition:index
    })
    
    //var date=this.data.datePosition
    //return date
  },
  bindChange: function(e) {
    //  console.log(e) 
    var x = e.detail.x
    var y = e.detail.y
    var offsetTop = 0;
    if (y > 0) {
      offsetTop += y
    }
    var offsetLeft = 0;
    if (x > 0) {
      offsetLeft += x;
    }
 
    this.setData({
      left: x,
      offsetLeft: offsetLeft,
      offsetTop: offsetTop,
      top: y
    })
  },


  choose: function(e) {
    var index = parseInt(e.currentTarget.id)
    if (index != this.data.areaPosition) {
      this.setData({
       areaPosition: index
      })
    }
    console.log("index in choose:", index)
    var p = e.currentTarget.id.split(",")
    var i = parseInt(p[0])
    var j = parseInt(p[1])
    var id =  j+1 // 1,2 
    var item = this.data.obj[this.data.datePosition][i][j]
    // console.log(item)
    //    1 可预订 
    //    2 已售完
    //   3 已选择
    //     4 我的预订
    //       5 锁定
    //         
    var status = item.status
  
    /**
     * 可预订
     */
    if (status == 1) {
      //判断数组长度最多选4个座位
      if (this.data.list.length == 4) {
        wx.showToast({
          title: '最多选择4场',
          icon: 'none',
          duration: 2000
        })
        return
      }
      item.status = 3
      /**
       * 生成框里的数据
       */
      this.data.list.push({
        price: this.data.obj[this.data.datePosition][i][j].price,
        time: this.data.time[i] + '-' + this.data.time[i + 1],
        area: this.data.session[this.data.sessionPosition].name ,
        id: id,
        date: this.data.date[this.data.datePosition].subTitle
      })

      /**
       * 计算价格
       */
      
      var title = this.getTitle(this.data.list)
      // console.log(title)
      this.setData({
        submitTitle: title,
        obj: this.data.obj,
        list: this.data.list
      })
  
    } else if (status == 3) {
      //i j
      var arithmeticList = []
      var isAdd = false
      for (var index in this.data.list) {
        var temp = this.data.list[index].id-1
        var x = parseInt(temp[0])
        var y = parseInt(temp[1])
        if (y == j && x != i) {
          //判断在一列
          arithmeticList.push(x)
          isAdd = true
        }
      };

      item.status = 1
      for (var m = 0; m < this.data.list.length; m++) {
        if (this.data.list[m].id == id) {
          this.data.list.splice(m, 1)
          break;
        }
      }
      /**
       * 计算价格
       */
      var title = this.getTitle(this.data.list)
      this.setData({
        submitTitle: title,
        obj: this.data.obj,
        list: this.data.list
      })
    } else if (status == 2) {
      wx.showToast({
        title: '不可选',
        icon: 'none',
        duration: 2000
      })
    }
  
   console.log(this.data.list.length)
  },




  getTitle: function(list) {
    if (list.length <= 0) {
      this.setData({
        price: 0
      })
      return '未选定场地'
    }
    this.data.price = 0
    for (var index in list) {
      this.data.price += list[index].price
    }
    this.setData({
      price: this.data.price
    })
    return '￥' + this.data.price +' ' + '提交订单'
    
  
  },
  /**
   * 判断是否为等差数列
   */
  isArithmeticList: function(list) {
    var tempArithmeticList = this.sortarr(list)
    for (var i = 0; i < tempArithmeticList.length - 1; i++) {
      var res = tempArithmeticList[i + 1] - tempArithmeticList[i]
      if (res < 0) res = res * -1;
      if (res != 1) {
        wx.showToast({
          title: '请选择两个连续的场地',
          icon: 'none',
          duration: 2000
        })
        return false
      }
    }
    return true
  },
  /**
   * 排序
   */
  sortarr: function(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var arr = []
    for (let i = 0;i < 7;i++){
      arr.push(this.dealTime(i))
    }
    arr[0].title = "今天"
    arr[1].title = "明天"
    this.setData({
      date: arr
    })
    console.log("date:", this.data.date)
    

    this.setData({
      type: options.type
    })


    var that = this;
    this.getVenue()
    // 高度自适应
    wx.getSystemInfo( { 
     success: function( res ) { 
      var clientHeight=res.windowHeight,
       clientWidth=res.windowWidth,
       rpxR=750/clientWidth;
      var calc=clientHeight*rpxR-180;
      console.log(calc)
      that.setData( { 
       winHeight: calc 
      }); 
     } 
    });
    var h = this.data.time.length
    var w = this.data.area.length
    var offsetH = h * 58 + h * 2
    var offsetW = w * 960 + h * 2
    var currentH = offsetH
    if (offsetH > this.data.max) {
      // offsetH = this.data.max
      currentH = this.data.max
    }
    this.setData({
      offsetH: offsetH,
      offsetW: offsetW,
      currentH: currentH
    })
  },
  
  jumpPage:function(options){
    wx.navigateTo({
      url: '/pages/pay/pay',
    })
  },
  selectItem(e){
    // console.log(e.detail.cal)
    // let updaSelectItem = e.detail;
    this.setData({
        detail: e.detail
    })

},

  tobuy:function(event){ //确认订单
    //  console(e.detail.cal)
    console.log("list:::::",this.data.list)
    var orderInfo=JSON.stringify(this.data.list)
    console.log("订单信息",orderInfo)
    var totalPrice=this.data.submitTitle[0]+parseInt(this.data.submitTitle[1]+this.data.submitTitle[2]+this.data.submitTitle[3])
    var date=[] //把所有选中的订单时间都放入date
    for (var j=0;j<this.data.list.length;j++){
      date.push(this.data.list[j].date)
    }
    var type=this.data.type
    console.log(date)
    // var time=detail 
    //  console.log(time)
    console.log(orderInfo)
    console.log(totalPrice)
    if (this.data.list.length==1) {
      wx.showModal({
      
        title:'确认订单',
        content:"场地类型："+this.data.type+"。所选的场地数量是："+this.data.list.length+"，场地信息："+JSON.stringify(this.data.list[0].date+","+this.data.list[0].time)+","+this.data.list[0].id+"号场地"+"。所选场地的总价格是："+this.data.submitTitle[0]+parseInt(this.data.submitTitle[1]+this.data.submitTitle[2]+this.data.submitTitle[3]),
        
        success:function(res){
          if(res.confirm){
            wx.navigateTo({
              url: '/pages/orderInformation/orderInformation?orderInfo=' +orderInfo+'&totalPrice='+totalPrice+'&venueName='+type+'&date='+date             
            })
          }
        }
      })
    }
    if (this.data.list.length==2) {
      wx.showModal({
      
        title:'确认订单',
        content:"场地类型："+this.data.type+"。所选的场地数量是："+this.data.list.length+"，场地信息："+JSON.stringify(this.data.list[0].date+","+this.data.list[0].time)+","+this.data.list[0].id+"号场地；"+JSON.stringify(this.data.list[1].date+","+this.data.list[1].time)+","+this.data.list[1].id+"号场地"+
        "。所选场地的总价格是："+this.data.submitTitle[0]+parseInt(this.data.submitTitle[1]+this.data.submitTitle[2]+this.data.submitTitle[3]),
        
        success:function(res){
          if(res.confirm){
            wx.navigateTo({
              url: '/pages/orderInformation/orderInformation?orderInfo=' +orderInfo+'&totalPrice='+totalPrice+'&venueName='+type+'&date='+date
            })

          }
        }
      })
    }
    if (this.data.list.length==3) {
      wx.showModal({
      
        title:'确认订单',
        content:"场地类型："+this.data.type+"。所选的场地数量是："+this.data.list.length+"，场地信息："
        +JSON.stringify(this.data.list[0].date+","+this.data.list[0].time)+","+this.data.list[0].id+"号场地；"+JSON.stringify(this.data.list[1].date+","+this.data.list[1].time)+","
        +this.data.list[1].id+"号场地；"+JSON.stringify(this.data.list[2].date+","+this.data.list[2].time)+","+this.data.list[2].id+
        "号场地"+
        "。所选场地的总价格是："+this.data.submitTitle[0]+parseInt(this.data.submitTitle[1]+this.data.submitTitle[2]+this.data.submitTitle[3]),
        success:function(res){
          if(res.confirm){
            wx.navigateTo({
              url: '/pages/orderInformation/orderInformation?orderInfo=' +orderInfo+'&totalPrice='+totalPrice+'&venueName='+type+'&date='+date
            })

          }
        }
      })
    }
    if (this.data.list.length==4) {
      wx.showModal({
      
        title:'确认订单',
        content:"场地类型："+this.data.type+"。所选的场地数量是："+this.data.list.length+"，场地信息："
        +JSON.stringify(this.data.list[0].date+","+this.data.list[0].time)+","+this.data.list[0].id+"号场地；"+JSON.stringify(this.data.list[1].date+","+this.data.list[1].time)+","
        +this.data.list[1].id+"号场地；"+JSON.stringify(this.data.list[2].date+","+this.data.list[2].time)+","+this.data.list[2].id+
        "号场地；"+
        JSON.stringify(this.data.list[3].date+","+this.data.list[3].time)+","+this.data.list[3].id+
        "号场地"+
        "。所选场地的总价格是："+this.data.submitTitle[0]+parseInt(this.data.submitTitle[1]+this.data.submitTitle[2]+this.data.submitTitle[3]),
        success:function(res){
          if(res.confirm){
            wx.navigateTo({
              url: '/pages/orderInformation/orderInformation?orderInfo=' +orderInfo+'&totalPrice='+totalPrice+'&venueName='+type+'&date='+date
            })

          }
        }
      })
    }
  },
  // onReady: function () {
  //   //获得popup组件
  //   this.popup = this.selectComponent("#popup");
  // },
 
  // showPopup() {
  //   this.popup.showPopup();
  // },

  // //取消事件
  // _error() {
  //   console.log('你点击了取消');
  //   this.popup.hidePopup();
  // },
  // //确认事件
  // getUserInfo(){
  //   // console.log('你点击了确认');
  //   this.popup.getUserInfo();
  // },
 
    
  }
)
