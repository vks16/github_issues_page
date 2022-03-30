import { Avatar, Typography, Hidden } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react';
import ReactMarkdown from 'react-markdown';


export default function IssueDetail(props: Issues.Comment) {
  return (
    <Box sx={{
      p: 1,
      display: "flex",
      justifyContent: "flex-start"
    }}>
      <Hidden smDown>
        <Box sx={{
          width: "80px",
          p: 2
        }}>
          <Avatar alt={props.commentedBy.name} src={props.commentedBy.profileImage} />
        </Box>
      </Hidden>
      <Box sx={{
        flexGrow: 1,

      }}>
        <Box sx={{
          "borderImageOutset": "0",
          "borderImageRepeat": "stretch",
          "borderImageSlice": "100%",
          "borderImageSource": "none",
          "borderImageWidth": "1",
          "borderLeftColor": "rgb(208, 215, 222)",
          "borderLeftStyle": "solid",
          "borderLeftWidth": "1px",
          "borderRightColor": "rgb(208, 215, 222)",
          "borderRightStyle": "solid",
          "borderRightWidth": "1px",
          "borderTopColor": "rgb(208, 215, 222)",
          "borderTopLeftRadius": "6px",
          "borderTopRightRadius": "6px",
          "borderTopStyle": "solid",
          "borderTopWidth": "1px",
          "boxSizing": "border-box",
          "color": "rgb(36, 41, 47)",
          "colorScheme": "light",
          "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
          "fontSize": "14px",
          "lineHeight": "21px",
          "marginLeft": "0px",
          "marginRight": "0px",
          "marginTop": "16px",
          "overflowWrap": "break-word",
          "textSizeAdjust": "100%",
          mt: 2,
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgb(246, 248, 250)",
          padding: "16px",
          width: "100%",
        }}>
          <Hidden smUp>
            <Box sx={{
              width: "20px"
            }}>
              <Avatar sx={{
                width: "20px",
                height: "20px",
              }} />
            </Box>
          </Hidden>
          <Typography>
            <strong>{props.commentedBy.name}</strong> commented on {props.createdAt}
          </Typography>
        </Box>

        <Box sx={{
          textAlign: "left",
          pl: 1,
          border: "1px solid rgb(208, 215, 222)"
        }}>
          <ReactMarkdown>{props.body}</ReactMarkdown>
        </Box>
      </Box>
    </Box>
  )
}