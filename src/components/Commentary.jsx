import React from 'react';
import jQuery from 'jquery';
import { http } from '../ajax';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../scss/comment.scss';

export default function Commentary() {
    const [comment, setComment] = React.useState([]);
    const [commentLoad, setCommentLoad] = React.useState(true);
    const id = useParams().id;
    const ajax = () => {
        jQuery.ajax({
            url: `${http()}/api/comment_products/${id}`,
            method: 'POST',
            data: { 'type': 0, },
            dataType: "html",
            beforeSend: function () {
                setCommentLoad(false);
            },
            success: function (data) {
                let json = jQuery.parseJSON(data);
                setComment(json);
            }
        });
    };
    const clickMe = () => {
        let valComment = document.querySelector('.text-full');
        if (valComment.value === '') return false;
        jQuery.ajax({
            url: `${http()}/api/comment_products/${id}`,
            method: 'POST',
            data: { 'type': 1, 'text': valComment.value, 'id': id },
            dataType: "html",
            beforeSend: function () {
                setCommentLoad(false);
            },
            success: function (data) {
                valComment.value = '';
                console.log(data);
                let json = jQuery.parseJSON(data);
                setComment(json);
            }
        });
    }
    React.useEffect(() => {
        ajax();
    }, [id]);
    return (
        <div className="__comments__">
            <div className="block_add_com">
                <textarea className='text-full'></textarea>
                <br />
                <button
                    className='btn btn-dark'
                    onClick={() => clickMe()}
                >Добавить</button>
            </div>
            <br />
            <h5>Коментария ({comment.count})</h5>
            {
                (comment.length !== 0) ? comment.itme.map((array, i) => {
                    return (
                        <div key={`_${i}_coments${array.id}`} className="block_users_comments">
                            <div className="user_block">
                                <div className="avatar-user">
                                    <i className="ti-user"></i>
                                </div>
                                <div className="user_info_b">
                                    <b>user {array.id_user}</b> <br />
                                    <span>{array.date}</span>
                                </div>
                            </div>
                            <div className="text_block">
                                <p>{array.text}</p>
                            </div>
                        </div>
                    )
                }) :
                    <p>Load....</p>
            }
            <br />
        </div>
    );
}
