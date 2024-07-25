import { getUpdatedDates } from "../../helpers";

import * as Styled from "./styled";

const Card = ({ card }) => {
  const {
    area,
    city,
    floor,
    price,
    rooms,
    leased,
    photos,
    floors,
    vipped,
    featured,
    paidDaily,
    updatedAt,
    hasRepair,
    isBusiness,
    hasMortgage,
  } = card;

  const pricePerPeriod = paidDaily ? "/day" : "/month";
  const modifiedPrice = price.value.toLocaleString();
  const paramsList = [
    rooms && `${rooms} rooms`,
    `${area.value} ${area.units}`,
    floor && `${floor}/${floors} floor`,
  ];
  const paramsRow = paramsList.filter((value) => !!value).join(", ");

  const statuses = [
    {
      label: "V",
      color: "#ff4d4d",
      type: "vipped",
      value: vipped,
    },
    {
      label: "P",
      color: "#f1c232",
      type: "featured",
      value: featured,
    },
    {
      label: "M",
      color: "#6aa84f",
      type: "mortgage",
      value: hasMortgage,
    },
    {
      label: "R",
      color: "#999",
      type: "repair",
      value: hasRepair,
    },
  ];

  const url = `/items/${card.id}`;
  const daysAgo = getUpdatedDates(updatedAt);
  const daysSuffix = daysAgo === "1" ? "day" : "days";
  const daysRow = `Last updated ${daysAgo} ${daysSuffix} ago`;

  return (
    <Styled.Card key={card.id}>
      <Styled.CardLink href={url} />

      <Styled.CardPreview>
        <picture>
          <img src={photos[0].thumbnail} alt='preview'/>
        </picture>
      </Styled.CardPreview>
      
      <Styled.CardText>
        <Styled.CardPrice>
          <span>{modifiedPrice}</span>
          <span>{price?.currency}</span>
          {leased && <span>{pricePerPeriod}</span>}
        </Styled.CardPrice>
        <div>
          {city?.name}
        </div>
        <Styled.CardParams>{paramsRow}</Styled.CardParams>
        <Styled.CardListStatuses>
          {statuses.map((status) => status.value && (
            <Styled.CardStatus key={status.type} color={status.color}>
              {status.label}
            </Styled.CardStatus>
          ))}
        </Styled.CardListStatuses>
        <Styled.CardBussiness>
          {isBusiness && 'Bussiness'}
        </Styled.CardBussiness>
        <div>{daysRow}</div>
      </Styled.CardText>

    </Styled.Card>
  );
};

export default Card;
