import styled from 'styled-components';

//commonly used components
export const B = {
  Container: styled.div`
    max-width: 120rem;
    margin: 0 auto;
    padding: 1.5rem;
    text-align: center;
  `,
  Ul: styled.ul``,
  Nav: styled.nav``,
  Button: styled.button`
    /* base */
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.7rem 3.5rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.mainColor};
    border-radius: 10rem;
    line-height: 1;
    cursor: pointer;

    /* reuse */
    &.gradient {
      background-image: ${({ theme }) => theme.colors.gradient};
      display: inline-flex;
      align-items: center;

      .dots {
        font-size: 2.4rem;
        margin-left: 0.5rem;
        opacity: 0.75;
      }

      &:hover {
        background-image: ${({ theme }) => theme.colors.gradientAlt};
      }
    }

    &.form-btn {
      margin-top: 2.5rem;
      cursor: pointer;
    }

    &.btn-purple {
      background-color: ${({ theme }) => theme.colors.purple};
      &:hover {
        background-color: ${({ theme }) => theme.colors.pointColorYello};
        color: ${({ theme }) => theme.colors.indigo};
      }
    }
  `,
  Form: styled.form``,
  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 2.5rem;
  `,
};
