import { Grid, TextField, Button, Box, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import IssueDetails from "../components/Issues/IssueDetail"
import { styled } from '@mui/system';
import { Tag } from "../components/Issues/IssueListItem";
type Props = {}

const Section = styled('div')({
  margin: "10px 2px",
  borderBottom: "1px solid rgb(216, 222, 228)",
  paddingBottom: "15px"
})

const Label = styled("div")({
  color: "rgb(87, 96, 106)",
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`,
  fontSize: "12px",
  fontWeight: 600,
  lineHeight: "18px",
  marginBottom: "8px",
  textAlign: "left"
})

const OpenButton = styled('div')({
  background: "#1a8b1a",
  padding: "5px 11px",
  borderRadius: "16px",
  lineHeight: "18px",
  color: "#fff",
  fontSize: "12px",
  fontWeight: 600
})

const CloseButton = styled('div')({
  background: "rgb(130, 80, 223)",
  padding: "5px 11px",
  borderRadius: "16px",
  lineHeight: "18px",
  color: "#fff",
  fontSize: "12px",
  fontWeight: 600
})

export default function IssueDetailsPage({ }: Props) {
  let params = useParams();
  const comments = useSelector(
    (store: Issues.InitialState) => store.issues.filter(
      e => e.id.toString() === params?.id
    )?.[0].comment
  );
  const issueDetail = useSelector(
    (store: Issues.InitialState) => store.issues.filter(
      e => e.id.toString() === params?.id
    )?.[0]
  );
  const [comment, setComment] = useState("");

  
  const addComment = () => {
    // Todo add comment
  }
  return (
    <Grid container>
      <Grid item xs={12} sx={{
        pb: 2,
        borderBottom: "1px solid rgb(216, 222, 228)",
        textAlign: "left",
        margin: "0px 20px"
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px"
        }}>
          <Typography sx={{
            color: "rgb(36, 41, 47)",
            fontSize: "32px",
            fontWeight: "400",
            fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`,
            lineHeight: "40px"
          }}>
            {issueDetail.title}
          </Typography>
          <Typography sx={{
            color: "rgb(36, 41, 47)",
            fontSize: "32px",
            fontWeight: "200",
            fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`,
            lineHeight: "40px"
          }}>
            #{issueDetail.id}
          </Typography>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px"
        }}>
          {issueDetail.closedOn == null ? <OpenButton>Open</OpenButton> : <CloseButton>Closed</CloseButton>}
          <Typography><strong>{issueDetail.comment[0].commentedBy.name}</strong> commented on {issueDetail.comment[0].createdAt}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={9}>
        {
          comments.map((e, i) => <React.Fragment key={`${e.id}-${i}`}>
            <IssueDetails id={e.id} body={e.body} commentedBy={e.commentedBy} createdAt={e.createdAt} />
          </React.Fragment>)
        }
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          columnGap: "5px",
          mr: 1,
          ml: {
            xl: "90px",
            lg: "86px",
            md: "86px",
            sm: "86px",
            xs: "10px",
          }
        }}>
          <TextField
            multiline
            minRows={6}
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button sx={{
            textAlign: "right"
          }} variant="contained"
            onClick={addComment}
          >Sumbit</Button>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={3} sx={{
        mt: 2
      }}>
        <Section>
          <Label>Assignees</Label>
          <Typography>
            {
              issueDetail.assignedTo.length === 0
                ? "No one assigned"
                : `${issueDetail.assignedTo.length} people assigned`
            }
          </Typography>
        </Section>

        <Section>
          <Label>Labels</Label>
          <Box sx={{
            display: "flex",
            gap: "10px"
          }}>
            {
              issueDetail.tag.map(e => <Tag key={e.name} color={e.color}>
                {e.name}
              </Tag>)
            }
          </Box>
        </Section>

      </Grid>
    </Grid>
  )
}