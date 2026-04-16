import styled from 'styled-components'

export const BackToTopButton = styled.button`
	position: fixed;
	bottom: 20px;
	right: 20px;
	padding: 8px 15px;
	border: none;
	background: var(--dark-color);
	color: white;
	border-radius: 50%;
	cursor: pointer;
	opacity: ${({ $show }) => ($show ? '1' : '0')};
	visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
	transition: opacity 0.3s, visibility 0.3s;
	transition: .5s;
	pointer-events: ${({ $show }) => $show ? 'auto' : 'none'}; 
`

