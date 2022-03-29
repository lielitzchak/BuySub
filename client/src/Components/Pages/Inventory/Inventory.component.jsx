import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import { getGroupProducts } from "../../../Services/GroupsService.service";
import Loading from "../../Features/Loading/Loading.component";
import { addProduct } from "../../../Services/ProductService.service";
import InventoryCard from "../InventoryCard/InventoryCard.component";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { TextField } from "@mui/material";


export default function Inventory() {

  const { auth, loading, setLoading } = useContext(authContext);
  const [groupProducts, setGroupProducts] = useState([])
  const [productInfo, setProductInfo] = useState({})
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false)




  useEffect(() => {
    setLoading(true)
    getGroupProducts(auth.groupName).then((data) => {
      console.log(data);
      if (data.length >= 1) {
        setGroupProducts(data)

      } else {
        console.log('empty');
      }
      setLoading(true)
    }).catch((err) => {
      console.log(err);
    }).finally(() => setLoading(false))

  }, [])

  let updateProductInfo = (event) => {
    productInfo[event.target.name] = event.target.value;
  }

  let addProductToInventory = (event) => {
    event.preventDefault();
    addProduct(productInfo, auth.groupName)
      .then((data) => {
        console.log(data)
        setOpen(false);
      })
      .catch((err) => console.log(err))

  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (

    loading ? <Loading /> :

      <section>

        {open ?
              <section className="addToInventoryPopUp">
                <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                >
                <DialogTitle id="responsive-dialog-title">
                    {"Add Product to Inventory"}
                </DialogTitle>
                <form action="" autoComplete="on">

                <DialogContent>
                    <DialogContentText>

                       <TextField
                          autoFocus
                          margin="dense"
                          label="Product Name"
                          type="text"
                          fullWidth
                          variant="standard"
                          required
                          name="productName"
                          onChange={updateProductInfo}
                            />
                        <TextField
                          autoFocus
                          margin="dense"
                          label="Price"
                          type="text"
                          fullWidth
                          variant="standard"
                          name="price"
                          onChange={updateProductInfo}
                            />
                        <TextField
                          autoFocus
                          margin="dense"
                          label="Quantity"
                          type="number"
                          fullWidth
                          variant="standard"
                          required
                          name="quantity"
                          onChange={updateProductInfo}
                            />

                        <TextField
                          autoFocus
                          margin="dense"
                          // label="Expiration Date"
                          type="date"
                          fullWidth
                          variant="standard"
                          name="expirationDate"
                          onChange={updateProductInfo}
                            />

                        <TextField
                          autoFocus
                          margin="dense"
                          label="Image Product"
                          type="text"
                          fullWidth
                          variant="standard"
                          name="productImage"
                          onChange={updateProductInfo}
                            />

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={addProductToInventory} autoFocus>
                    Add Product
                    </Button>
                </DialogActions>
                </form>
                </Dialog>



          </section> : <Button variant="outlined" onClick={handleClickOpen}>Add Product</Button>}


        <section className="inventoryContainer">

          <section className="searchBox">
            <input type="search" placeholder="Serach Product" /> <button>Search</button>
          </section>

          {groupProducts && groupProducts.length >= 1
            ?
            groupProducts.map((item) => {

              return <InventoryCard key={item._id} item={item} />

            })
            :
            <h1>The Are No Products</h1>}
        </section>
      </section>
  );
};
