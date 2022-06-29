import React, { useState } from "react";
import jQuery from 'jquery';
import http from './http';
import swal from 'sweetalert';
function AjaxAll(event, select) {
    event.preventDefault();
    let formElement = document.querySelector(select);
    // console.dir(formElement);
    let i = 0;
    while (formElement[i]) {
        if (formElement[i].value === '') {
            if (formElement[i].required == true) {
                formElement[i].style.border = '1px solid #dc3545';
                let mesAjax = document.querySelector('.message-form-ajax')
                mesAjax.innerHTML = 'Поля для заполнения обязательно!';
                mesAjax.style.opacity = 1;
                mesAjax.style.transform = 'scale(1)';
                setTimeout(() => {
                    mesAjax.style.opacity = 0;
                    mesAjax.style.transform = 'scale(0)';
                }, 5000);
                return false; break;
            }
        }
        else formElement[i].style.border = '1px solid #ddd';
        i++;
    }
    let formData = new FormData(formElement);
    jQuery.ajax({
        method: jQuery(formElement).attr('method'),
        url: http() + jQuery(formElement).attr('url'),
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        beforeSend: () => document.querySelector('.box-load-ajax').classList.add('load-active'),
        success: function (result) {
            console.log(result);
            let json = jQuery.parseJSON(result);
            console.log(json);
            if (json.status == 'ok') swal(json.title, json.message, json.icon);
            else if (json.status == 'error') swal(json.title, json.message, json.icon);
            formElement.reset();
            //Load remove
            setTimeout(() => {
                document.querySelector('.box-load-ajax').classList.remove('load-active');
            }, 500);
        },
    });
};
export default AjaxAll;
