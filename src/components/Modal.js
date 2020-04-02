import React from 'react';
import styled from 'styled-components'
import { useNavigate } from "@reach/router"
import { Nav } from "../components/Nav"

const ModalContainer = styled.div`
position:fixed;
top:0px;
left:0px;
width:100vw;
height:100vh;
z-index:104;
background-color:#414A39;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
`

const CenterContainer = styled.div`
width:300px;
height:280px;
// background-color:red;
display:flex;
flex-direction: column;
justify-content:space-around;
align-items:flex-end;
border: 1px solid #D2952A;
`
const LoginTitleContainer = styled.div`
width:100%;
height:50px;
display:flex;
flex-direction: row;
justify-content:space-between;
align-items:center;
// border: 1px solid #D2952A;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.03em;
margin:10px 0px 0px 0px;
`
const Input = styled.input`
max-width:100%;
height:23px;
border-radius: 36px;
background-color: #C4C4C4;
border:1px solid #414A39;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.03em;
cursor: pointer;
padding: 10px 0px 10px 20px;
`
const Button = styled.button`
width:223px;
height:45px;
border-radius: 36px;
background: rgba(196, 196, 196, 0.4);
font-size: 24px;
line-height: 28px;
letter-spacing: 0.03em;
color:  ${props => props.color ? 'rgba(0, 0, 0, 0.4)' : '#EF5030'};;
cursor: pointer;
&:active {
    outline: none;
    border:none;
}
&:focus {
    outline: 0;
}
`
const FormContainer = styled.div`
width:300px;
height:200px;
// background-color:red;
display:flex;
flex-direction: column;
justify-content:space-around;
align-items:center;
// border: 1px solid #D2952A;
`
const Close = styled.div`
width:50px;
height:50px;
border-radius:50%;
background-color:#EF5030;
font-size:20px;
font-weight:800;
color:#414A39;
cursor:pointer;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin: 0px 20px 0px 0px;
`

export const Modal = (props) => {
    const navigate = useNavigate();

    return (
        <ModalContainer>
            <Nav />
            {
                props.type === 'form' ?
                    <CenterContainer>
                        <LoginTitleContainer>
                            <div style={{ margin: '0px 0px 0px 30px', color: 'grey' }}>Log in</div>
                            <Close onClick={() => props.activateModal()} >&times;</Close >
                        </LoginTitleContainer>
                        <FormContainer>
                            <Input placeholder={'email'} />
                            <Input placeholder={'password'} />
                            <Button disabled={false} onClick={() => navigate('/dashboard')}>Submit</Button >
                        </FormContainer></CenterContainer> : <CenterContainer>
                        <Close onClick={() => props.activateModal()} >&times;</Close ><FormContainer style={{ margin: '-50px 0px 0px 30px', color: '#EF5030', fontSize: '36px' }}>description</FormContainer>
                    </CenterContainer>
            }

        </ModalContainer>

    )
}