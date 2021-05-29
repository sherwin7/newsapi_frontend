import { Card, CardContent, Grid, Button } from "@material-ui/core";
import styled from "styled-components";
import { FiLink } from "react-icons/fi";

const NewsCard = ({ heading, source, description, imageURL }) => {
  return (
    <Card>
      <Grid container alignItems="center">
        <Grid item>
          <CardContent>
            <NewsHeading>
              Manchester City Vs. Chelsea: What You Need To Know About The
              Champions League Final.
            </NewsHeading>
            <NewsSource>Forbes</NewsSource>
            <p>
              The English Premier League rivals are set to face off in the
              showpiece match of European soccer.
            </p>
            <a href="https://sherwinp.dev" target="_blank">
              <Button variant="contained" color="primary" endIcon={<FiLink />}>
                Learn more
              </Button>
            </a>
          </CardContent>
        </Grid>
        <Grid item>
          <CardImage
            src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60b230aac9ec7d4531564f27%2F0x0.jpg"
            alt="image.jpeg"
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default NewsCard;

const NewsHeading = styled.div`
  font-weight: 570;
  font-size: large;
  max-width: 700px;
`;

const NewsSource = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  color: blue;
`;

const CardImage = styled.img`
  max-width: 250px;
  margin-right: 10px;
`;
