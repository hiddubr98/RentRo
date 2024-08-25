import React from 'react';
import { Box, Card, CardContent, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Header from './Header';

const ordersData = [
  { id: '#UB9708', products: '👕👖', date: 'August 05 2018 10:29 PM', paymentStatus: 'Paid', total: '$176.41', paymentMethod: 'Mastercard', orderStatus: 'Shipped' },
  { id: '#UB9707', products: '👗👚', date: 'August 04 2018 08:16 AM', paymentStatus: 'Awaiting Authorization', total: '$1,458.65', paymentMethod: 'Visa', orderStatus: 'Processing' },
];

const Orders = () => {
  return (
    <Box>
            <Header />
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: 3,marginTop: ' 100px' }}>
    
      <Grid container spacing={3} sx={{ marginBottom: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Earnings</Typography>
              <Typography variant="h4">6659</Typography>
              <Typography variant="subtitle2" color="text.secondary">8.5% increase</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Booking</Typography>
              <Typography variant="h4">9856</Typography>
              <Typography variant="subtitle2" color="text.secondary">6.5% increase</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Reviews</Typography>
              <Typography variant="h4">893</Typography>
              <Typography variant="subtitle2" color="text.secondary">8.5% increase</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4">45631</Typography>
              <Typography variant="subtitle2" color="text.secondary">8.5% increase</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

     
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="orders table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Products</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Payment Status</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Order Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersData.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.products}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Select value={order.paymentStatus}>
                    <MenuItem value="Paid">Paid</MenuItem>
                    <MenuItem value="Awaiting Authorization">Awaiting Authorization</MenuItem>
                    <MenuItem value="Payment Failed">Payment Failed</MenuItem>
                    <MenuItem value="Cash On Delivery">Cash On Delivery</MenuItem>
                    <MenuItem value="Fulfilled">Fulfilled</MenuItem>
                    <MenuItem value="Unfulfilled">Unfulfilled</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.paymentMethod}</TableCell>
                <TableCell>{order.orderStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </Box>
  );
};

export default Orders;
