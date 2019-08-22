           var nv_style_anim = document.createElement("style");
                                      nv_style_anim.innerHTML = `.example input {
    display: block;
    margin: 0 auto 20px auto;
    width: 150px;
    padding: 8px 10px;
    border: 1px solid #CCCCCC;
    border-radius: 3px;
    background: #F2F2F2;
    text-align: center;
    font-size: 1em;
    letter-spacing: 0.02em;
    
}

.example select {
    padding: 10px;
    background: #f4f6f4;
    border: 1px solid #CCCCCC;
    border-radius: 3px;
    margin: 0 3px;
}

.example select.invalid {
    color: #E9403C;
}

.example input[type="submit"] {
    margin-top: 10px;
}

.example input[type="submit"]:hover {
    cursor: pointer;
    background-color: #e5e5e5;
}
.year {
 
    font-size: 16px!important;
    font-weight: 500 !important;
     
}`;
                                      
                                      document.body.appendChild(nv_style_anim);
