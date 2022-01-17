import styled from "styled-components";
export const MainDataWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  font-family: 'Charm', cursive;
  

  img {
    min-width: 250px;
    width: 300px;
    max-height: 450px;
    border: 1px solid #ddd;
    border-radius: 40px;
  }

  .text-side {
    margin-left: 20px;
    .summary {
      border-radius:10px;
      background-color:#FF6464;
      padding:20px;
      color: #5f5f5f;
      line-height: 1.5;
      font-family: 'Reenie Beanie', cursive;
      font-size:30px;
      font-weight:bold;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    img {
      margin-bottom: 20px;
      margin: auto;
    }
    .text-side {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

export const Headline = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    margin: 0;
    border-right: 1px solid #ddd;
    padding-right: 25px;
    margin-right: 20px;
    font-family: 'Charm', cursive;
  }

  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
`;

export const TagList = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  padding:10px;

  span {
    margin: 6px;
    margin-bottom: 0;
    color: blue;
    background-color: #d0c9ff;
    padding: 3px 13px;
    border-radius: 20px;
    font-size: 14px;
  }
`;