import React from 'react';
import jQuery from 'jquery';
export default function Products_ajax(props) {

    jQuery.ajax({
        url: 'http://admin.yoshop.loc/api/products',
        method: 'POST',
        data: { 'date': 1 },
        dataType: "html",
        beforeSend: function () {
            props.setLoad([]);
        },
        success: function (data) {
            let json = jQuery.parseJSON(data);
            props.setProducts(json);
        }
    });
    return true;
}
