import React from 'react';
import coinIcon from '../assets/images/coin.svg';
import ProductFavorite from '../models/ProductFavorite';

export function getWelcomeMessage(app: any) {
  return (
    <p>
      {
        isBeggar(app.state.currentUser.points) &&
        <i><span role="img" aria-labelledby="hi">🤙</span> What up <span>{ app.state.currentUser.name.split(' ')[0] }</span>!</i>
      }
      {
        isPoor(app.state.currentUser.points) &&
        <i><span role="img" aria-labelledby="hi">🖖</span> What's new <span>{ app.state.currentUser.name.split(' ')[0] }</span>?</i>
      }
      {
        hasPoints(app.state.currentUser.points) &&
        <i><span role="img" aria-labelledby="spock">✋</span> Hello. How are you <span>{ app.state.currentUser.name }</span>?</i>
      }
      {
        isRich(app.state.currentUser.points) &&
        <i><span role="img" aria-labelledby="spock">✋</span> Hi <span>{ app.state.currentUser.name }</span>, How are you?</i>
      }
      {
        isMillionaire(app.state.currentUser.points) &&
        <i>It's nice to see you Mr. <span>{ app.state.currentUser.name.split(' ')[1] }</span>.</i>
      }
    </p>
  );
}

const isBeggar = (points: number) => points <= 0;
const isPoor = (points: number) => points > 0 && points <= 1000;
const hasPoints = (points: number) => points > 1000 && points <= 2000;
const isRich = (points: number) => points > 2000 && points <= 10000;
const isMillionaire = (points: number) => points > 10000;

export function getUserPointsMessage(app: any) {
  return (
    <p>
      {
        isBeggar(app.state.currentUser.points) &&
        <i>Do you need some points <img src={coinIcon} alt="" />?</i>
      }
      {
        !isBeggar(app.state.currentUser.points) &&
        <i>You have <span>{ app.state.currentUser.points }</span> <img src={coinIcon} alt="" />. </i>
      }
      {
        isPoor(app.state.currentUser.points) &&
        <i>Maybe you want earn some points?</i>
      }
      {
        hasPoints(app.state.currentUser.points) &&
        <i>We invite you to earn some points <span role="img" aria-labelledby="wink">😉</span>.</i>
      }
      {
        isRich(app.state.currentUser.points) &&
        <i>We invite you to redeem a product in our shop <span role="img" aria-labelledby="shop">🛍.</span></i>
      }
      {
        isMillionaire(app.state.currentUser.points) &&
        <i>You have a lot of points! <span role="img" aria-labelledby="rock">🤩</span></i>
      }
    </p>
  );
}

export function getFavoriteProductMessage(favoriteProduct: ProductFavorite) {
  return (
    <p>
      {
        dontHaveRedeems(favoriteProduct.count) &&
        <i>Do you know that you can redeem products, right? <span role="img" aria-labelledby="rock">🤔</span></i>
      }
      {
        haveSome(favoriteProduct.count) &&
        <i>We know that you love the <span>{ favoriteProduct.product.name }</span> because you have { favoriteProduct.count }! <span role="img" aria-labelledby="smile">😆</span></i>
      }
      {
        haveMany(favoriteProduct.count) &&
        <i>Now, we know that you really love the <span>{ favoriteProduct.product.name }</span> because you have { favoriteProduct.count }! <span role="img" aria-labelledby="smile">😆</span></i>
      }
      {
        isShopaholic(favoriteProduct.count) &&
        <i>We are thinking that you have something with the <span>{ favoriteProduct.product.name }</span>, because you have { favoriteProduct.count }! <span role="img" aria-labelledby="wow">😲</span></i>
      }
    </p>
  );
}

const dontHaveRedeems = (count: number) => count <= 2;
const haveSome = (count: number) => count > 2 && count < 5;
const haveMany = (count: number) => count >= 5 && count < 10;
const isShopaholic = (count: number) => count >= 10;

export function getSpentPointsMessage(totalPointsSpend: number) {
  return (
    <p>
      {
        didntSpendPoints(totalPointsSpend) &&
        <i>Are you lazy or stingy? Earn points and redeem them for some products.</i>
      }
      {
        !didntSpendPoints(totalPointsSpend) &&
        <i>You have spent around <span>{ totalPointsSpend }</span> points. </i>
      }
      {
        spentSomePoints(totalPointsSpend) &&
        <i>We develop this awesome app to you can redeem products. Enjoy it! <span role="img" aria-labelledby="love">😍</span></i>
      }
      {
        spentManyPoints(totalPointsSpend) &&
        <i>We enjoy that you enjoy this enjoyable app! <span role="img" aria-labelledby="funy">🤪</span></i>
      }
      {
        spentSoMuchPoints(totalPointsSpend) &&
        <i>If the redeem were real, you would leave us in a bankruptcy! <span role="img" aria-labelledby="wow">😵</span></i>
      }
    </p>
  );
}

const didntSpendPoints = (spentPoints: number) => spentPoints <= 2000;
const spentSomePoints = (spentPoints: number) => spentPoints > 2000 && spentPoints <= 5000;
const spentManyPoints = (spentPoints: number) => spentPoints > 5000 && spentPoints < 10000;
const spentSoMuchPoints = (spentPoints: number) => spentPoints >= 10000;
