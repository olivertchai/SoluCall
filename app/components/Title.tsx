import { ColorValue, Text, TextStyle,StyleProp } from 'react-native'
import React from 'react'

type TitleProps = {
    children: React.ReactNode;
    c?:ColorValue;
    fz?:number;
    fw?:TextStyle["fontWeight"];
};

export default function Title({children,c,fz,fw}:TitleProps) {
  const style : StyleProp<TextStyle> = {
    color:c || "black",
    fontSize: fz || 15, 
    fontWeight:fw || "normal"
  }

  return (
    <Text style={style} >{children}</Text>
  )
}