const arr=[
   {
      properties: 'màu sắc',
      options:['xanh', 'đỏ', '','']
   },

   {
      properties: 'giới tính',
      options:['', 'nữ', '',0]
   },
]

   arr.forEach(function(item){
         for(let i=item.options.length-1; i>=0; i--){
            if(item.options[i]===0 || item.options[i]===''){
               item.options.splice(i, 1)
            }
         }
   })

   console.log(arr)