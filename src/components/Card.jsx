import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

function Cards(props) {
    const theme = createTheme({
        typography: {
            fontFamily: ' "Open Sans", sans-serif',
        }
    })
    function getFirstParagraph(text) {
        const paragraphs = text.split('\n').filter(p => p.trim() !== '');
        return paragraphs[0] || '';
    }
    return <>


        <ThemeProvider theme={theme}>
            <div className="singleCard">

                <Card sx={{ margin: 1, width: '100%' }} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={props.src}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <span style={{ fontWeight: " bold" }}>No. Of episodes:</span>   {props.episodes}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <span style={{ fontWeight: " bold" }}>Rate :</span> {props.score} /10
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <span style={{ fontWeight: " bold" }}>Release date:</span> {props.year}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {getFirstParagraph(props.summary)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </div >

        </ThemeProvider >

    </>
}
export default Cards