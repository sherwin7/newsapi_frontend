import { Card, CardContent, Grid, Button } from "@material-ui/core";
import styled from "styled-components";
import { FiLink } from "react-icons/fi";
import UnavailableImage from "../images/unavailable-image.jpg";

const NewsCard = ({ heading, source, description, imageURL, articleLink }) => {
  return (
    <Card>
      <Grid container alignItems="center">
        <Grid item alignContent="space-between">
          <CardContent>
            <NewsHeading>{heading}</NewsHeading>
            <NewsSource>{source}</NewsSource>
            <NewsDescription>{description}</NewsDescription>
            <a href={articleLink} target="_blank" without rel="noreferrer">
              <Button variant="contained" color="primary" endIcon={<FiLink />}>
                Learn more
              </Button>
            </a>
          </CardContent>
        </Grid>
        <Grid item>
          <CardImage src={imageURL || UnavailableImage} alt="image.jpeg" />
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

const NewsDescription = styled.p`
  max-width: 700px;
`;
