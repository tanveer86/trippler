import React from 'react'

 function AddingImportProductsList() {
  return (
        <div className="offset-1">
            <h3 className="offset-1 font-weight-bold mb-3">List of Products</h3>
               <h4 className="ml-5 font-weight-bold text-danger">Categories</h4>
        <div className="ml-3" style={{fontSize:"22px"}}>
            <p className="ml-5 text-info" style={{cursor:"pointer"}}  data-toggle="collapse" data-target="#beer">Beer</p>
            <div id="beer" className="collapse">
                <div className="ml-3">
                <p className="ml-5 text-danger" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsBeer">Brands</p>
                <div id="brandsBeer" className="collapse">
                    <div className="ml-3">
                        <p className="ml-5 font-weight-bold" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsBeerKingfisher">Kingfisher</p>
                        <div id="brandsBeerKingfisher" className="collapse">
                        <div className="" style={{marginLeft:"65px"}}>
                            <input type="checkbox" />Add All<br></br>
                            <input type="checkbox" />Kingfisher Premium<br></br>
                            <input type="checkbox" />Kingfisher Strong<br></br>
                            <input type="checkbox" />Kingfisher Ultra<br></br>
                            <input type="checkbox" />Kingfisher Storm<br></br>
                            <input type="checkbox" />Kingfisher Lager<br></br>    
                        </div>
                    </div>
                    <p className="ml-5 font-weight-bold" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsBeerCarlsberg">Carlsberg</p>
                    <div id="brandsBeerCarlsberg" className="collapse">
                        <div className="ml-5">
                            <input type="checkbox" />Add All<br></br>
                            <input type="checkbox" />Carlsberg All Malt<br></br>
                            <input type="checkbox" />Carlsberg Elephant Strong <br></br>  
                        </div>
                    </div>
                    <p className="ml-5 font-weight-bold" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsBeerTuborg">Tuborg</p>
                    <div id="brandsBeerTuborg" className="collapse">
                        <div className="ml-5">
                            <input type="checkbox" />Add All<br></br>
                            <input type="checkbox" />Tuborg Green<br></br>
                            <input type="checkbox" />Tuborg STRONG PREMIUM<br></br>
                            <input type="checkbox" />Tuborg Booster Strong <br></br>  
                        </div>
                    </div>
                    <p className="ml-5 font-weight-bold" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsBeerBira">BIRA</p>
                    <div id="brandsBeerBira" className="collapse">
                        <div className="ml-5">
                            <input type="checkbox" />Add All<br></br>
                            <input type="checkbox" />BIRA 91<br></br>
                            <input type="checkbox" />BIRA IP<br></br>   
                        </div>
                    </div>
                    <p className="ml-5 font-weight-bold" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsBeerBudwiser">Budwiser</p>
                    <div id="brandsBeerBudwiser" className="collapse">
                        <div className="ml-5">
                            <input type="checkbox" />Add All<br></br>
                            <input type="checkbox" />Budweiser Premium<br></br>
                            <input type="checkbox" />Budweiser Magnum Strong<br></br>   
                        </div>
                    </div>
                    </div>    
                </div>
               </div>
            </div>
            <p className="ml-5 text-info" style={{cursor:"pointer"}}  data-toggle="collapse" data-target="#whisky">Whisky</p>
            <div id="whisky" className="collapse">
                <div className="ml-3">
                <p className="ml-5 text-danger" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsWhisky">Brands</p>
                <div id="brandsWhisky" className="collapse">
                    <div className="ml-3">
                        <p className="ml-5 font-weight-bold" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsWhiskyOfficer">Officer’s Choice </p>
                        <div id="brandsWhiskyOfficer" className="collapse">
                        <div className="" style={{marginLeft:"65px"}}>
                            <input type="checkbox" />Add All<br></br>
                            <input type="checkbox" />OFFICER’S CHOICE BLUE<br></br>
                            <input type="checkbox" />OFFICER’S CHOICE BLACK<br></br>
                            <input type="checkbox" />OFFICER’S CHOICE STAR<br></br>  
                        </div>
                    </div>
                    <p className="ml-5 font-weight-bold" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsWhiskyBlack">Black Dog</p>
                    <div id="brandsWhiskyBlack" className="collapse">
                        <div className="ml-5">
                            <input type="checkbox" />Add All<br></br>
                            <input type="checkbox" />Black Dog Centenary Aged 8 Years Delux<br></br>
                            <input type="checkbox" />Black Dog Deluxe Gold Reserve Aged 12 Years Blended<br></br>  
                        </div>
                    </div>
                    <p className="ml-5 font-weight-bold" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsWhiskySignature">Signature</p>
                    <div id="brandsWhiskySignature" className="collapse">
                        <div className="ml-5">
                            <input type="checkbox" />Add All<br></br>
                            <input type="checkbox" />Signature Rare Aged<br></br>
                            <input type="checkbox" />Signature Premier Grain<br></br> 
                        </div>
                    </div>
                    <p className="ml-5 font-weight-bold" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsWhiskyBlenders">Blenders Pride</p>
                    <div id="brandsWhiskyBlenders" className="collapse">
                        <div className="ml-5">
                            <input type="checkbox" />Add All<br></br>
                            <input type="checkbox" />Blenders Pride Reserve Collection<br></br>
                            <input type="checkbox" />Seagram's Blenders Pride Rare Premium<br></br>   
                        </div>
                    </div>
                    <p className="ml-5 font-weight-bold" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsWhiskyRoyal">Royal Stag</p>
                    <div id="brandsWhiskyRoyal" className="collapse">
                        <div className="ml-5">
                            <input type="checkbox" />Add All<br></br>
                            <input type="checkbox" />Royal Stag Barrel Select<br></br>
                            <input type="checkbox" />Royal Stag Delux <br></br>   
                        </div>
                    </div>
                    </div>    
                </div>
               </div>
            </div>
            <p className="ml-5 text-info" style={{cursor:"pointer"}}  data-toggle="collapse" data-target="#wine">Wine</p>
            <div id="wine" className="collapse">
            <div className="ml-3">
                <p className="ml-5 text-danger" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsWine">Brands</p>
                     <div id="brandsWine" className="collapse">
                        <div className="ml-5">
                            <input type="checkbox" />Add All<br></br>
                            <input type="checkbox" />SULA RASA<br></br>
                            <input type="checkbox" />MYRA MISFIT<br></br> 
                            <input type="checkbox" />FRATELLI SETTE <br></br> 
                            <input type="checkbox" />GROVER ZAMPA LA RESERVE <br></br>
                            <input type="checkbox" />YORK ARROS<br></br>
                            <input type="checkbox" />KRSMA SANGIOVESE<br></br>
                            <input type="checkbox" />CHAROSA TEMPRANILLO RESERVE<br></br>
                            <input type="checkbox" />SOL DE CHILE SYRAH MERLOT <br></br>
                            <input type="checkbox" />THE WOLFTRAP RED <br></br>
                            <input type="checkbox" />REVEILO – SYRAH RESERVE 2005<br></br>
                        </div>
                      </div>
                     </div>
            </div>
            <p className="ml-5 text-info" style={{cursor:"pointer"}}  data-toggle="collapse" data-target="#rum">Rum</p>
            <div id="rum" className="collapse">
            <div className="ml-3">
                <p className="ml-5 text-danger" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsrum">Brands</p>
                     <div id="brandsrum" className="collapse">
                        <div className="ml-5">
                            <input type="checkbox" />Add All<br></br>
                            <input type="checkbox" />Old Monk The Legend<br></br>
                            <input type="checkbox" />Old Monk Very Old Vatted Special XXX<br></br> 
                            <input type="checkbox" />Old Monk Supreme XXX <br></br> 
                            <input type="checkbox" />Old Monk Gold Reserve  <br></br>
                            <input type="checkbox" />Bacardi Apple Original<br></br>
                            <input type="checkbox" />Bacardi Black Rum<br></br>
                            <input type="checkbox" />Bacardi O Original Orange<br></br>
                            <input type="checkbox" />Bacardi Superior<br></br>
                        </div>
                      </div>
                     </div>
            </div>
            <p className="ml-5 text-info" style={{cursor:"pointer"}}  data-toggle="collapse" data-target="#vodka">Vodka</p>
            <div id="vodka" className="collapse">
            <div className="ml-3">
                <p className="ml-5 text-danger" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsvodka">Brands</p>
                     <div id="brandsvodka" className="collapse">
                        <div className="ml-5">
                            <input type="checkbox" />Add All<br></br>
                            <input type="checkbox" />Magic Moments Remix Vodka Chocolate <br></br>
                            <input type="checkbox" />Magic Moments Grain Vodka <br></br> 
                            <input type="checkbox" />Oxyzen Apple Vodka <br></br> 
                            <input type="checkbox" />Romanov Red Vodka  <br></br>
                            <input type="checkbox" />Russkiy Parliament Vodka<br></br>
                            <input type="checkbox" />Vladivar Vodka Lemon Zest<br></br>
                        </div>
                      </div>
                     </div>
            </div>
            <p className="ml-5 text-info" style={{cursor:"pointer"}}  data-toggle="collapse" data-target="#brandy">Brandy</p>
            <div id="brandy" className="collapse">
            <div className="ml-3">
                <p className="ml-5 text-danger" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsbrandy">Brands</p>
                     <div id="brandsbrandy" className="collapse">
                        <div className="ml-5">
                            <input type="checkbox" />Add All<br></br>
                            <input type="checkbox" />Magic Moments Remix Vodka Chocolate <br></br>
                            <input type="checkbox" />Magic Moments Grain Vodka <br></br> 
                            <input type="checkbox" />Oxyzen Apple Vodka <br></br> 
                            <input type="checkbox" />Romanov Red Vodka  <br></br>
                            <input type="checkbox" />Russkiy Parliament Vodka<br></br>
                            <input type="checkbox" />Vladivar Vodka Lemon Zest<br></br>
                        </div>
                      </div>
                     </div>
                </div>
            <p className="ml-5 text-info" style={{cursor:"pointer"}}  data-toggle="collapse" data-target="#gin">Gin</p>
            <div id="gin" className="collapse">
            <div className="ml-3">
                <p className="ml-5 text-danger" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandsgin">Brands</p>
                     <div id="brandsgin" className="collapse">
                        <div className="ml-5">
                            <input type="checkbox" />Add All<br></br>
                            <input type="checkbox" />Broker’s <br></br>
                            <input type="checkbox" />3<br></br> 
                            <input type="checkbox" />Ford’s Gin<br></br> 
                            <input type="checkbox" />Hendrick’s<br></br>
                            <input type="checkbox" />Gordon’s<br></br>
                        </div>
                      </div>
                     </div>
                </div>
                <p className="ml-5 text-info" style={{cursor:"pointer"}}  data-toggle="collapse" data-target="#tequila">Tequila</p>
            <div id="tequila" className="collapse">
            <div className="ml-3">
                <p className="ml-5 text-danger" style={{cursor:"pointer"}} data-toggle="collapse" data-target="#brandstequila">Brands</p>
                     <div id="brandstequila" className="collapse">
                        <div className="ml-5">
                            <input type="checkbox" />Add All<br></br>
                            <input type="checkbox" />4 Copas Blanco <br></br>
                            <input type="checkbox" />Chinaco Blanco <br></br> 
                            <input type="checkbox" />OEl Tesoro Silver <br></br> 
                            <input type="checkbox" />Romanov Red Vodka  <br></br>
                            <input type="checkbox" />Oro Azul Blanco<br></br>
                        </div>
                      </div>
                     </div>
                </div>
            </div>
        </div>
  )
}
export default AddingImportProductsList;
