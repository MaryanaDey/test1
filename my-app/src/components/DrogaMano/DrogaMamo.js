import styled from "styled-components";
import PropTypes from 'prop-types';
import React from "react";

import paintings from '../../painting.json';
import defaultImage from './../../assets/icons/book.svg'





const DrogaMamo = ({
  imageUrl = defaultImage,
  title,
  author = 'не ишвестно',
  price,
  profileUrl,
  quantity
}) => {
    return (
        <Wrapper>
            {/* <Title>DrogaMamo</Title>
            <List>
                     <Item>
                    <ItemIcon>
                          <div className='bg'></div>
                        <ItemTitle>Можно дітям</ItemTitle>
                        <listIcon />
                    </ItemIcon>
                </Item>


                 <Item>
                    <ItemIcon>
                          <div className='bg'></div>
                        <ItemTitle>Без консервантів</ItemTitle>
                        <listIcon />
                    </ItemIcon>
                </Item>

                 <Item>
                    <ItemIcon>
                          <div className='bg'></div>
                        <ItemTitle>Всі страви за 12 хв</ItemTitle>
                    </ItemIcon>
                </Item>

                  <Item>
                    <ItemIcon >
                          <div className='bg'></div>
                        <ItemTitle>Всі страви за 12 хв</ItemTitle>

                    </ItemIcon>
                </Item>
        </List>
         */}
        <div>
          <img src={imageUrl ?? defaultImage} alt={title} width="480" />
          <h2>{title}</h2>
          <p>
            Author: <a href={profileUrl}>{author}</a>
          </p>
          <p>Cena: {price}  kreditov</p>
          <p>Dostupnost: { quantity < 10 ? 'zakanchivaetsya' : 'est v nalichii'} </p>
          <button type="button">Dobavit v korzinu</button>
        </div>
        </Wrapper>

    )
};

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 0;
 background-color:#00FFF6;
   height:600px;   
`;

const Title = styled.h1`
color: #b2b2b2;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 32px 0;
`

const Item = styled.li`
display: flex;
  flex-direction: column;
  align-items: center;
  outline: 2px solid #fff;
`

const ItemIcon = styled.div`
`
const ItemTitle = styled.p`
 display: flex;
  justify-content: center;
  align-items: center;
  width: 63px;
  height: 63px;
  font-weight: 700;
  font-size: 35px;
  line-height: 38px;
  color:#fff;
`
const Icon = styled.img`
  padding: 0;
  height: 18px;
`;



DrogaMamo.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity:PropTypes.number.isRequired,
};


export default DrogaMamo;