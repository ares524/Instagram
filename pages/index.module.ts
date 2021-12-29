import styled from '@emotion/styled'

export const Break = styled.br`
  @media all and (max-width: 62rem) {
    display: none;
  }
`

export const Homepage = styled.div`
  // border: 1px solid #DBDBDB;
  .chakra-stat {
    padding-inline-start: 0rem !important;
    padding-inline-end: 0rem !important;
  }
  .user-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #EFEFEF;
    padding: 0.75rem;
  }

  .user-detail-info-container {
    padding: 0.75rem;

    .name {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.125rem;
      text-transform: lowercase;
      color: #262626;
      margin-left: 1rem;
    }
  }
  .user-detail-info-footer {
    padding: 0.75rem;
    border-bottom: 1px solid #EFEFEF;

    .info {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .likes, .name {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.125rem;
      text-transform: lowercase;
      color: #262626;
    }

    .desc {
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 1.125rem;
      padding-left: 0.5rem;
    }

    .comments-text {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 1.125rem;;
      color: #8E8E8E;
    }

    .date {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: normal;
      font-size: 0.625rem;
      line-height: 1.125rem;
      letter-spacing: 0.2px;
      text-transform: uppercase;
      color: #8E8E8E;
    }
  }
  .comment-input-section {
    padding: 0.375rem 0.75rem 0rem 0.75rem;

    .comment-container {
      height: 2.5rem;
    }
    .comment-input {
      border: unset;
    }
    .comment-input:focus {
      box-shadow: unset;
    }
    .post-button {
      padding-right: 0.75rem;
      font-family: Segoe UI;
      font-style: normal;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.125rem;;
      text-transform: capitalize;
      color: #0095F6;
      cursor: pointer;
    }
  }
`

export const Network = styled.div`
`

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;

  .avatar-img {
    margin: auto;
    padding: 0.3rem;
    border: 2.5px solid #DE0046;
  }

  .username-text {
    font-family: Segoe UI;
    font-style: normal;
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 1rem;

    text-align: center;
    letter-spacing: 0.008rem;
    text-transform: lowercase;
  }
`
