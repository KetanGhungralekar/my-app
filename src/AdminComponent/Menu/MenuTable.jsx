import { Box, Card, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const orders = [1,1,1,1,1,1]
export const MenuTable = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Card className="mt-1">
        <CardHeader action={
          <IconButton onClick={()=>{
            navigate("/admin/restaurants/menu/create")
          }} aria-label="settings">
            <CreateIcon />
          </IconButton>
        }
        title={"Menu"} sx={{ pt: 2, alignItems: "center" }} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Ingredients</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Availability</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {1}
                  </TableCell>
                  <TableCell align="left">{"image"}</TableCell>
                  <TableCell align="left">{"codfonardkg"}</TableCell>
                  <TableCell align="left">{"price"}</TableCell>
                  <TableCell align="left">{"pizza"}</TableCell>
                  <TableCell align="left"><IconButton>
                    <Delete/></IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};
