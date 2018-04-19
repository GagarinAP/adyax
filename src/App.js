import React from 'react'
import styled from 'styled-components'
import adyax from './images/adyax.png'
import better from './images/better-exp.png'
import footer from './images/footer.png'

const Title = styled.div`
	width: 636px;
  height: 67px;
  opacity: 0.95;
  font-size: 60px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.12;
  letter-spacing: 0.8px;
  text-align: center;
  margin: 0 auto;
  padding-top: 65px;
  color: #191919;
`;

const Point = styled.div`
	color: #fedd23;
	width: 10px;
  float: right;
`;

const Description = styled.div`
	width: 740px;
  height: 169px;
  font-size: 24px;
  font-weight: 600;
  font-style: normal;
  margin: 0 auto;
  font-stretch: normal;
  line-height: 1.79;
  letter-spacing: normal;
  text-align: center;
  padding-top: 120px;
  color: #191919;
`;

const FooterText = styled.div`
	width: 735px;
  height: 208px;
  font-size: 40px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 222px auto;
`;

const Sum = styled.div`
	width: 141px;
  height: 40px;
  font-size: 35px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  float: right;
  padding-top: 45px;
`;

class App extends React.Component {
	render() {
		return(
			<div className='container-fluid'>
				<div className="row" style={{height: '2327px'}}>
					<div className="col-md-12" style={{height: '770px'}}>
						<img src={adyax} alt="adyax" style={{width: '183px', height: '62px', display: 'block', margin: '53px auto 19px auto'}}/>
						<img src={better} alt="better" style={{width: '245px', height: '10px', display: 'block', margin: '0 auto'}}/>
						<Title>Frond-End Developer<Point>.</Point></Title>
						<Description>
							Adyax’s core values take top priority: we care for our client, and we care for our people. Staff and
							clients work in partnership with consistent,  transparent communication.
						</Description>
					</div>
					<div className="col-md-12" style={{background: '#fedd23', height: '880px'}}>
						<div className='container' style={{position: 'relative'}}>
							<div style={{position: 'absolute', top: '-147px', right: 0, padding: '47px 65px 47px 52px', width: '1097px', height: '951px', backgroundColor: '#ffffff', boxShadow: '0 25px 54px 0 rgba(0, 0, 0, 0.11)'}}>
								<div style={{height: '257px', width: '100%', borderBottom: '1px solid #ebebeb'}}>

								</div>
								<div style={{height: '257px', width: '100%', borderBottom: '1px solid #ebebeb'}}>

								</div>
								<div style={{height: '257px', width: '100%', borderBottom: '1px solid #ebebeb'}}>

								</div>
								<Sum>
									225.00 €
								</Sum>
							</div>
						</div>
					</div>
					<div className="col-md-12" style={{height: '686px', backgroundColor: '#000', marginTop: '70px', position: 'relative'}}>
						<img src={footer} alt="better" style={{width: '1072px', height: '517px', display: 'block', margin: '84px auto'}}/>
						<FooterText>
							Adyax specializes in working with multi-national, multi-brand companies on a wide range of customer,
							client and employee-facing solutions.
						</FooterText>
					</div>
				</div>
			</div>
		)
	}
}

export default App