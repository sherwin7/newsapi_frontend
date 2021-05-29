import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Divider,
  IconButton,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { MdMenu } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(4),
  },
  category: {
    "&:hover": {
      color: "blue",
    },
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
  catMenu: {
    "&:focus": {
      backgroundColor: "#b4b4ff",
      color: "blue",
      fontWeight: 600,
    },
  },
}));

const Sidenav = () => {
  const classes = useStyles();
  const category = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <Grid container direction="column" className={classes.margin}>
      <Grid container item xs={6} spacing={2} direction="column">
        <Divider className={classes.divider} />
        <Grid>
          <IconButton>
            <MdMenu />
          </IconButton>
          Category
        </Grid>
        <Divider className={classes.divider} />

        {category.map((cat) => {
          return (
            <Grid item className={classes.category} key={uuidv4()}>
              <MenuItem className={classes.catMenu} dense>
                {cat}
              </MenuItem>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Sidenav;
