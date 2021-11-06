import React from "react";
import styled from "styled-components";
import { Modal } from "bootstrap";
import { ButtonContainer } from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


const Recipe = ({title,calories,image,ingredients}) => {
    const foodData = ingredients.map(ingredient => (
        <ol>
            <li>
                {ingredient.text}
            </li>
        </ol>
    ));
    return(
        <FoodWraper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
              <div className="img-container pt-5">
                  <img src={image} alt="food" className="card-img-top img-fluid rounded-circle d-block mx-auto" style={{"width":"250px","height":"250px"}} />
              </div>
              <div className="card-body d-flex justify-content-between">
              <h6 style={{"textAlign":"center","margin-top":"20px","font-size":"1.6rem"}}>{title}</h6>
               <div>              
                  <ButtonContainer type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => console.log(e.currentTarget.value)}>
                      <img src="https://www.pngrepo.com/png/123684/512/ingredients.png" alt="ing" style={{"width":"50px","height":"50px"}} />
                  </ButtonContainer>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                              <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">Ingridients</h5>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                  {foodData}
                              </div>
                         </div>
                      </div>
                  </div>
              </div>
            </div>
              <div className="card-footer d-flex justify-content-between">
                  <h6>{calories.recipe.calories.toFixed(0)} Kcal</h6>
                  <i class="far fa-heart"></i>
              </div>
            </div>
       </FoodWraper>
    );
}

export default Recipe;
const FoodWraper = styled.div`
.card{
    border-color:transparent;
    border-radius:20px;
    margin-top:50px;
}
.card-footer{
    background:transparent;
    border:transparent;
    transition:all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247);
    }
}
.img-container{
  position:relative;
  overflow:hidden;
}
.card-img-top{
    transition:all 1s linear;
}
`;
