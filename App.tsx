import {View, Text, Image, ScrollView} from 'react-native'

export  default function App(){
  return(

    <ScrollView>
      {}
    <View style={{flexDirection:"row", alignItems:"center"}}>
      <Image source={require("./assets/senku4.gif")} style={{width: 100, height: 100, borderRadius: 50, margin: 20}}   />
    <View>
        <Text style={{fontSize:18, fontWeight:"600"}}>Senku Ishigami</Text>
        <Text><Text style={{ fontWeight:"600"}}>12</Text> posts  <Text> 23.8M</Text> Followers <Text>  1</Text> Following </Text>
        <Text><Text style={{ fontWeight:"600"}}>#ฝันร้ายวิทยาศาสตร์</Text><Text></Text><Text></Text></Text>
    </View>
    </View>
    
     <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>

      <View>
        <Image source={require("./assets/senku3.gif")} style={{width: 80, height:80, borderRadius: 40, borderWidth: 3, borderColor:"lightgray"}}/>
        <Text style={{textAlign:"center"}}>Senku </Text>
      </View>
      <View>
        <Image source={require("./assets/senku5.gif")} style={{width: 80, height:80, borderRadius: 40, borderWidth: 3, borderColor:"lightgray"}}/>
        <Text style={{textAlign:"center"}}>Senku</Text>
      </View>x
      <View>
        <Image source={require("./assets/senku6.gif")} style={{width: 80, height:80, borderRadius: 40, borderWidth: 3, borderColor:"lightgray"}}/>
        <Text style={{textAlign:"center"}}>Senku</Text>
      </View>
      <View>
        <Image source={require("./assets/senku7.gif")} style={{width: 80, height:80, borderRadius: 40, borderWidth: 3, borderColor:"lightgray"}}/>
        <Text style={{textAlign:"center"}}>Senku</Text>
      </View>
      <View>
        <Image source={require("./assets/senku8.gif")} style={{width: 80, height:80, borderRadius: 40, borderWidth: 3, borderColor:"lightgray"}}/>
        <Text style={{textAlign:"center"}}>Senku</Text>
      </View>
      <View>
        <Image source={require("./assets/senku9.gif")} style={{width: 80, height:80, borderRadius: 40, borderWidth: 3, borderColor:"lightgray"}}/>
        <Text style={{textAlign:"center"}}>Senku</Text>
        </View>

     </ScrollView>

     <View style={{flexDirection:"row", flexWrap:"wrap", gap: 5, marginTop:20}}>
      <Image source={require("./assets/senku10.gif")} style={{width:"32%", height:200}}/>
      <Image source={require("./assets/senku11.gif")} style={{width:"32%", height:200}}/>
      <Image source={require("./assets/senku12.gif")} style={{width:"32%", height:200}}/>
      <Image source={require("./assets/senku13.gif")} style={{width:"32%", height:200}}/>
      <Image source={require("./assets/senku14.gif")} style={{width:"32%", height:200}}/>
      <Image source={require("./assets/senku15.gif")} style={{width:"32%", height:200}}/>
      <Image source={require("./assets/senku16.gif")} style={{width:"32%", height:200}}/>
      <Image source={require("./assets/senku17.gif")} style={{width:"32%", height:200}}/>
      <Image source={require("./assets/senku18.gif")} style={{width:"32%", height:200}}/>
      <Image source={require("./assets/senku19.gif")} style={{width:"32%", height:200}}/>
      <Image source={require("./assets/senku20.gif")} style={{width:"32%", height:200}}/>
      <Image source={require("./assets/senku21.gif")} style={{width:"32%", height:200}}/>
     </View>


    </ScrollView>

    

   
  )
}