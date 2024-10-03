import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'
import { theme } from '../../constants/theme'
import ArrowLeft from './ArrowLeft'
import Delete from './Delete'
import Mail from './mail'
import Password from './password'
import Profile from './Profile'
import Notification from './Notification'
import Category from './Category'

const icons ={
    home: Home,
    arrowLeft:ArrowLeft,
    delete: Delete,
    mail: Mail,
    password: Password,
    profile: Profile,
    notification: Notification,
    category: Category
}

const Icon = ({name, ...props}) => {  

    const IconComponent = icons[name];

  return (
    <IconComponent
        height={props.size || 24}
        width={props.size || 24}
        strokeWidth={props.strokeWidth || 1.9}
        color={theme.colors.text}
        {...props}
    />
  )
}

export default Icon

const styles = StyleSheet.create({})