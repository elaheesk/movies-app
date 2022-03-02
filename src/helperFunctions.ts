export const handleLikePropety = (list: any, likedObject: any) => {
  const changePropertyValue = list.map((every: any) => {
    if (likedObject.id === every.id) {
      return { ...likedObject, liked: !every.liked }; //här ändrar vi värdet till motsatsen av defaultvärdet av liked. om liked är true ändras det till motsatsen false, om liked är false ändras det till motstsen true. liked: !product.liked
    } else {
      return every;
    }
  });
  return changePropertyValue;
};
