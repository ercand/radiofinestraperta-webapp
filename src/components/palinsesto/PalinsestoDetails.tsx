import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PalinsestoData } from '../../types/PalinsestoData';

interface PalinsestoUrlParams {
    slug: string;
}

const PalinsestoDetails = () => {
    const [palinsestoInfo, setPalinsestoInfo] = useState<PalinsestoData>();
    const { slug } = useParams<PalinsestoUrlParams>();

    useEffect(() => {
        // 

        async function LoadPalinsestoJson() {
            let response = await fetch("/assets/palinsesto.json");
            let result: PalinsestoData[] = await response.json();

            let findValue = result.find(p => {
                return p.id === slug;
            })

            setPalinsestoInfo(findValue)
        }
        LoadPalinsestoJson();


        /*   console.log("useEffect")
           let result=fetch("/assets/palinsesto.json")
               .then((response) => { return response.json() })
               .then((response: PalinsestoData[]) => console.log(response));
           
           console.log(result)*/
    }, [slug]);


    return (
        <div className="palinsesto-details">
            {palinsestoInfo &&
                <>
                    <h1>{palinsestoInfo.title}</h1>
                    <div className="image"><img src={`/${palinsestoInfo.image}`} alt={palinsestoInfo.title} /></div>
                    <div className="description"></div>
                    <div id="container" dangerouslySetInnerHTML={{ __html: palinsestoInfo?.fullDescription }}></div>
                </>
            }
        </div>
    )
}

export default PalinsestoDetails;