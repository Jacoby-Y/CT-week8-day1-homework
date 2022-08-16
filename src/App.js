import React from "react";
import { Typography, AppBar, Card, CardAction, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@material-ui/core";
import { Book } from "@material-ui/icons";
import BookInfo from "./components/BookInfo"

const App = ()=>{
    return (
        <>
        <CssBaseline />
        <AppBar position="relative" style={{marginBottom: "3rem"}}>
            <Toolbar>
                <Book />
                <Typography variant="h6">
                    Book Store
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm">
                    <BookInfo />
                </Container>
            </div>
        </main>
        </>
    );
}

export default App;