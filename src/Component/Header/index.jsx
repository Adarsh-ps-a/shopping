import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { paths } from "../../constants/paths";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import { HomepageConst } from "../../constants/OtherConstats";

const PrimarySearchAppBar = (props) => {
  const history = useHistory();
  const [cartCount, setCartCount] = React.useState(0);

  React.useEffect(() => {
    if (props?.cartList > 0) {
      setCartCount(props?.cartList);
    }
  }, [props?.cartList]);

  const handleCart = () => {
    history.push(paths.CART_LIST.pathName);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {HomepageConst.HeaderTitle}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size='large'
              aria-label='show 17 new notifications'
              color='inherit'
            >
              <Badge badgeContent={cartCount || 0} color='error'>
                <ShoppingCartIcon onClick={handleCart} />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-haspopup='true'
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-haspopup='true'
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
const mapDispatchToProps = {};
const mapStateToProps = (state) => {
  return {
    cartList: state.getCartReducer?.data?.length,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimarySearchAppBar);
