import { Box} from '@mui/material';
import React from 'react'
import { useSelector } from "react-redux"
import IssueListItem from '../components/Issues/IssueListItem';

type Props = {}

export default function Index({ }: Props) {
  const issues = useSelector((store: any) => store.issues);
  return (
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
      my: 2,
      margin: "0px 10px"
    }}>

      {
        issues.map((e: Issues.Issue) => <React.Fragment key={e.id}>
          <IssueListItem
            id={e.id}
            title={e.title}
            tag={e.tag}
            openedOn={e.openedOn}
            closedOn={e.closedOn}
            assignedTo={e.assignedTo} 
            openedBy={e.openedBy}
            closedBy={e.closedBy}
            comment={e.comment}
            />
        </React.Fragment>)
      }

      
    </Box>
  )
}