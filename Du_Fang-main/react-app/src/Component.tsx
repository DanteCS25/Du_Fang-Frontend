import styled from 'styled-components';

interface Props {
  signinIn: boolean;
}

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
`;

export const SignUpContainer = styled.div<Props>`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;

   ${props => props.signinIn !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  ` 
  : null}

`;

export const SignInContainer = styled.div<Props>`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;

   ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}

`;

export const Form = styled.form`

`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 30;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 80%;
`;

export const Button = styled.button`
  border-radius: 20px;
  background: linear-gradient(90deg, #BDA5E5, #2F2D7C);
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const GhostButton = styled(Button)`
  background: linear-gradient(90deg, #BDA5E5, #2F2D7C);
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

export const OverlayContainer = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;

  ${props =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}

`;

export const Overlay = styled.div<Props>`
  background-image: url('../assets/signup back.jpeg') no-repeat center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

  ${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}

`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)<Props>`
  transform: translateX(-20%);

     ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
     
`;

export const RightOverlayPanel = styled(OverlayPanel)<Props>`
  right: 0;
  transform: translateX(0);

       ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}

`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;