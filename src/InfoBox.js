import React from 'react';
import "./InfoBox.css";
import {Card,CardContent,Typography} from '@material-ui/core';
function InfoBox({title,cases,active,isRed,total, ...props}) {
    return (
        <Card onClick={props.onClick} className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"}` }>
            <CardContent>
              {/* Title i.e. coronavirus cases*/}
              <Typography className="infoBox__title" color="textsecondary">
                  {title}
              </Typography>

              {/*+120k Number of cases*/}
              <h2 className= {`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>

              {/* 1.2m Total*/}
              <Typography className="infoBox__total" color="textsecondary">
                  {total} Total
              </Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox;
