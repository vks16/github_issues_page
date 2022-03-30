import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Box, Typography } from '@mui/material';



export default function IssueListItem(props: Issues.Issue) {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "flex-start",
      rowGap: "10px",
      p: 1,
      '&:hover': {
        background: "#f6f8fa"
      }
    }}>
      <Box sx={{
        width: "25px"
      }}>
        {props.closedOn === null ? <AdjustIcon color="success"/> : <CheckCircleOutlineIcon color="action" />}
      </Box>
      <Box sx={{
        px:1,
        flexGrow: 1
      }}>
       <a href={`/issues/${props.id}`}>
       <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "10px"
        }}>
        <Typography sx={{
          textAlign: "left",
          color: "rgb(36, 41, 47)",
          fontSize: "16px",
          fontWeight: "600",
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
        }}>
          {props.title}
        </Typography>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "10px"
        }}>
          {
            props.tag.map(e => <Tag color={e.color}>
              {e.name}
            </Tag>)
          }
        </Box>
        </Box>
       </a>

        <Typography sx={{
          color: "rgb(87, 96, 106)",
          fontSize: "12px",
          lineHeight: "18px",
          textAlign: "left"
        }}>
          {
            props.closedOn === null ?
            `#${props.id} opened on ${props.openedOn} by ${props.openedBy.name}`
            : `#${props.id} by ${props?.closedBy?.name} was closed on ${props.closedOn}`
          }
        </Typography>
      </Box>

      <Box>
        <ChatBubbleOutlineIcon /> {props.comment.length}
      </Box>
    </Box>
  )
}

export const Tag = (props : any) => {
  return <Box sx={{
    background: props.color,
    color: "rgb(0, 0, 0)",
    fontSize: "11px",
    lineHeight: "20px",
    borderRadius: "24px",
    border: "1px solid rgba(124, 80, 237, 0)",
    padding: "0px 7px",
    fontWeight: "500"
  }}>
    {props.children}
  </Box>
}