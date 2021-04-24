import React from 'react';
import Button from '../UI/Button';
import DrawingCard from './DrawingCard';
import '../UI/Card.css';
import { Link } from 'react-router-dom';

export default function MainDrawings(){
    const btnDraw = 'Ver más dibujos';
    const dibujo = [
        {
            name: "Smile",
            photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5367cef-4c5f-4068-8ca2-5ff75847e9a9/dd119sg-bf277105-da90-4817-958f-0b20712a8911.jpg/v1/fill/w_600,h_1120,q_75,strp/smile_by_jinxed_valentine_dd119sg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMTIwIiwicGF0aCI6IlwvZlwvZDUzNjdjZWYtNGM1Zi00MDY4LThjYTItNWZmNzU4NDdlOWE5XC9kZDExOXNnLWJmMjc3MTA1LWRhOTAtNDgxNy05NThmLTBiMjA3MTJhODkxMS5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ns39XNs5n1eOW94c0Fvx8W8tZaeQS0lSsHC31eBJFXQ",
            description: "primer dibujo"
        },
        {
            name: "You are my everything",
            photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5367cef-4c5f-4068-8ca2-5ff75847e9a9/dd10dyc-97700be8-744e-4feb-bfa1-a1901337f7ad.jpg/v1/fill/w_600,h_800,q_75,strp/you_are_my_everything_by_jinxed_valentine_dd10dyc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04MDAiLCJwYXRoIjoiXC9mXC9kNTM2N2NlZi00YzVmLTQwNjgtOGNhMi01ZmY3NTg0N2U5YTlcL2RkMTBkeWMtOTc3MDBiZTgtNzQ0ZS00ZmViLWJmYTEtYTE5MDEzMzdmN2FkLmpwZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.2B8r4SrYTFEyG3RLF8XShQs09f0VrUgOufHHKf00DHQ",
            description: "No me acuerdo"
        }
    ]

    return(
        <div>
           <section className="card-wrapper">
               <header className="card-header">
                   <h1>Dibujos destacados</h1>
               </header>
               <div className="card-body">
               <DrawingCard name={dibujo[0].name} photo={dibujo[0].photo} description={dibujo[0].description} className="pre" />
               <DrawingCard name={dibujo[1].name} photo={dibujo[1].photo} description={dibujo[1].description} className="pre" />
        
               </div>
               <footer className="card-foot">
                  <Link to="/drawings"> <Button value={btnDraw}/></Link>
               </footer>
           </section>
        </div>
    );
}