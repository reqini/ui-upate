import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import './typography.css'

const useStyles = makeStyles(theme => ({
  /* Typography: () => ({
    width: '100%',
  }), */
}))

const Typography = ({
  children,
  className,
  variant = 'h1',
  fontSize = 18,
  fontWeight = 300,
  lineHeight = null,
  textDecoration = 'none',
  color,
  fontStyle = 'normal',
  margin = 0,
  textAlign,
}) => {
  const classes = useStyles({
    fontSize,
    fontWeight,
    color,
    margin,
    textAlign,
    fontStyle,
    lineHeight,
    textDecoration
  })

  return React.createElement(
    variant,
    {
      className: `typography ${className}`,
      style: {
        textDecoration: textDecoration,
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color || '#2F3143',
        margin: margin,
        textAlign: textAlign || 'left',
        fontStyle: fontStyle,
        lineHeight: lineHeight,
      },
    },
    children
  )
}

export default React.memo(Typography)
