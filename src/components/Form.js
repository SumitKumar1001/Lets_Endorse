import React, { useState } from "react";

const initValue = {
  bussiness_stage: "",
  age_of_establishment: "",
  primary_product_service_offered: "",
  offered_to: "",
  secondary_product_service_offered: "",
  processed_products: "",
  relevant_experience: "",
  skill_training: "",
  usp: "",
  establishment_type: "",
  business_area: "",
  business_locality: "",
  infra_ownership: "",
  establishment_area: "",
  reason_for_location: "",
  market_research: "",
  primary_market: "",
  customers: "",
  seasonality: "",
  competition: "",
  suppliers: "",
  marketing_avenues: "",
  scaleup_potential: "",
  name: "",
  bussiness_idea: "",
  product_service_offered: "",
  city: "",
};
function Form() {
    const [data, setData] = useState(initValue);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        // console.log(data);
    }
    return (
         <form>
        <div >
            <div>
                <label>Stage of Bussiness</label>
                    <input type="text" onChange={handleChange} placeholder='Enter Name' />
                <input type="text" onChange={handleChange} placeholder='Enter Your Idea'/>
                <select onChange={handleChange} >
                    <option value="Start-up">Start-up</option>
                    <option value="Scale-up">Scale-up</option>
                </select>
                {`${data.name} is looking to ${data.bussiness_stage} their business of ${data.bussiness_idea}.`}
            </div>
                    <label>Age of establishment</label>
                    <input type="number" onChange={handleChange} placeholder="Enter age of establishment" />
                    {`This enterprise has been operational since ${data.age_of_establishment} years and has been serving its customers since then.`}
        </div>
                <div>
                    <label>Primary Products/Services offfered</label>
                    <input type="text" onChange={handleChange} placeholder="Enter age of establishment" />
                </div>

                <div>
                    <label>Offered to</label>
                    <select onChange={handleChange}>
                        <option value="End Customers">End Customers</option>
                        <option value="WholeSalers">WholeSalers</option>
                        <option value="Distributors">Disributors</option>
                        <option value="Retailers">Retailers</option>
                    </select>
                     {`This establishment offers products/services like- ${data.primary_product_service_offered} to ${data.offered_to}.`}
                    </div>

                <div>
                    <label>Secondary Products/Services offfered</label>
                    <input type="text" onChange={handleChange} placeholder="Enter secondary product service offered" />
                    {`In addition, the enterprise shall also be involved in- ${data.secondary_product_service_offered}`}
                </div>

                <div>
                    <label>Processed products</label>
                    <input type="text" onChange={handleChange} placeholder="processed products" />
                    {`Other products of the enterprise shall include- ${data.processed_products}`}
                </div>

                <div>
                    <label>Years of relevant experience in this field</label>
                <input type="number" onChange={handleChange} placeholder="relevant experience" />
                    {`$name has relevant experience of ${data.relevant_experience} years in this field. .`}
                </div>

                <div>
                    <label>Skill training</label>
                <select onChange={handleChange}>
                        <option value="No formal skill training">No formal skill training</option>
                        <option value="Has formal skill training and certifiate">Has formal skill training and certifiate</option>
                    </select>
                     {`The entrepreneur ${data.skill_training} in this field of work.`}
                </div>

                <div>
                    <label>Unique Selling Proposition</label>
                    <select onChange={handleChange}>
                        <option value="the enterpreneur's experience in this field">the enterpreneur's experience in this field</option>
                        <option value="innovative product/service">innovative product/service</option>
                        <option value="high profit margin">high profit margin</option>
                        <option value="superior customer support">superior customer support</option>
                        <option value="quality and affordable products/service">quality and affordable products/service</option>
                        <option value="high demand in teh target market">high demand in teh target market</option>
                        <option value="abundant supply of raw materials">abundant supply of raw materials</option>
                        <option value="wide range of products/services">wide range of products/services</option>
                        <option value="robust value-chain of the business">robust value-chain of the business</option>
                        <option value="frequency of customer visits">frequency of customer visits</option>
                    </select>
                     {`The enterprise is uniquely positioned because of its - ${data.usp}`}
                </div>

                <div>
                <div>
                    <label>Establishment type</label>
                    <select onChange={handleChange}>
                        <option value="Factory">Factory</option>
                        <option value="Mill">Mill</option>
                        <option value="Stall">Stall</option>
                        <option value="Boutique">Boutique</option>
                        <option value="Vehicle">Vehicle</option>
                        <option value="Centre">Centre</option>
                        <option value="Store">Store</option>
                        <option value="Farm">Farm</option>
                        <option value="Plant">Plant</option>
                        <option value="Processing Unit">Processing Unit</option>
                        <option value="Shop">Shop</option>
                        <option value="Vending Cart">Vending Cart</option>
                        <option value="Manufacturing Unit">Manufacturing Unit</option>
                    </select>
                </div>

                <div>
                    <label>Name of the area</label>
                    <input type="text" onChange={handleChange} placeholder="business_area" />
                </div>

                <div>
                    <label>Locality of business</label>
                    <select onChange={handleChange}>
                        <option value="Urban">Urban</option>
                        <option value="Rural">Rural</option>
                        <option value="Semi-Urban">Semi-Urban</option>
                        <option value="Slum">Slum</option>
                    </select>
                </div>

               <div>
                    <label>Ownership of infrastructure</label>
                    <input type="text" onChange={handleChange} placeholder='Enter City'/>
                    <select onChange={handleChange}>
                        <option value="Rented">Rented</option>
                        <option value="Leased">Leased</option>
                        <option value="Self-Owned">Self-Owned</option>
                    </select>
                     {`The ${data.establishment_type} is located in ${data.business_locality} area of ${data.city} in a ${data.infra_ownership} property.`}
                    </div>
                </div>

                 <div>
                    <label>Establishment area</label> 
                    <input type="number" onChange={handleChange}  placeholder='Enter Establishment Area'/>
                    {`The size of the establishment is ${data.establishment_area} sq.ft.`}
                </div>
                
                <div>
                    <label>Reason for selecting this location</label>
                    <select onChange={handleChange}>
                        <option value="Nearness of market">Nearness of market</option>
                        <option value="Good footfall">Good footfall</option>
                        <option value="Nearness to source of materials">Nearness to source of materials</option>
                        <option value="Nearness to targeted customer demographics">Nearness to targeted customer demographics</option>
                        <option value="Lesser competition around">Lesser competition around</option>
                        <option value="Access to permit/liscence of operate">Access to permit/liscence of operate</option>
                        <option value="Nearness to suppliers Affordability">Nearness to suppliers Affordability</option>
                        <option value="No rental overheads">No rental overheads</option>
                        <option value="Other such factors">Other such factors</option>
                    </select>
                     {`This locality is selected because of ${data.reason_for_location}.`}
                </div>
  
                <div>
                    <label>Locality of business</label>
                    <select onChange={handleChange}>
                        <option value="Not Conducted">Not Conducted</option>
                        <option value="Market Research has been conducted">Market Research has been conducted</option>
                    </select>
                    {`${data.market_research} and the range of products and target market has been identified after that.`}
                </div>

                <div>
                    <label>Primary market</label>
                    <select onChange={handleChange} >
                        <option value="Local">Local</option>
                        <option value="Regional">Regional</option>
                        <option value="National">National</option>
                        <option value="International">International</option>
                    </select>
                    {`The enterprise shall focus on offering its products/services to ${data.primary_market} markets. `}
                </div>

                <div>
                    <label>Processed products</label>
                    <input type="text" onChange={handleChange} placeholder="Enter Customers" />
                    {`Our customers shall include- ${data.customers}`}
                </div>

                <div>
                    <label>Seasons of high sales</label>
                    <select onChange={handleChange}>
                        <option value="Consistant sales across all sales">Consistant sales across all sales</option>
                        <option value="Higher sales in festive season">Higher sales in festive season</option>
                        <option value="Higher sales in copper/cultivation season">Higher sales in copper/cultivation season</option>
                        <option value="High sales in peak seasons">High sales in peak seasons</option>
                    </select>
                    {`The nature of the business is such that we expect ${data.seasonality}.`}
                </div>

                <div>
                    <label>Competition</label>
                    <select onChange={handleChange}>
                        <option value="No Similar goods/service providers in this locality">No Similar goods/service providers in this locality</option>
                        <option value="Only a few similar goods/service providers in this locality">Only a few similar goods/service providers in this locality</option>
                        <option value="Many Similar goods/service providers in this locality">Many Similar goods/service providers in this locality</option>
                        <option value="High sales in peak seasons">High sales in peak seasons</option>
                    </select>
                    {`Regarding competition, there are ${data.competition}.`}
                </div>

                <div>
                    <label>List of Suppliers</label>
                    <input type="text" onChange={handleChange} placeholder="Enter Suppliers" />
                    {`The enterprise shall procure goods/raw materials from ${data.suppliers}.`}
                </div>

                <div>
                    <label>Marketing avenues</label>
                    <select onChange={handleChange}>
                        <option value="Distributing of marketing materials">Distributing of marketing materials</option>
                        <option value="Storefront/bussinessbranding">Storefront/bussinessbranding</option>
                        <option value="Seasonal Discounts and Offers">Seasonal Discounts and Offers</option>
                        <option value="Cross promotion">Cross promotion</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Word of Mouth">Word of Mouth</option>
                    </select>
                     {`Our marketing avenues to reach the targeted customers shall include- ${data.marketing_avenues}`}
                </div>

                <div>
                    <label>Avenues of scaling up in future</label>
                    <select onChange={handleChange}>
                        <option value="increasing the variety of product/service offering">increasing the variety of product/service offering</option>
                        <option value="Expanding the current offering to other geographies">GExpanding the current offering to other geographies</option>
                        <option value="Opening more outlets">Opening more outlets</option>
                        <option value="Building value-chain integrations">Building value-chain integrations</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Other allied revenue streams">Other allied revenue streams</option>
                    </select>
                     {`The various foreseeable avenues of scaling up and growing the business in the foreseeable future include- ${data.scaleup_potential}.`}
                </div>
         </form>
  )
}



export default Form;