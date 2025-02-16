'use client';
import { OrderlyAppProvider, TradingPage } from "@orderly.network/react";
import { ConnectorProvider } from "@orderly.network/web3-onboard";
import { OrderlyConfig } from '@/app/config';

interface Props {
	onSymbolChange: (symbol: any) => void;
	symbol: string;
}

const View = (props: Props) => {
	const { tradingViewConfig } = OrderlyConfig();

	return (
		<ConnectorProvider
			apiKey="your-api-key"
			options={{
				chains: [{
					id: '0x13881',
					token: 'NMA'
				}],
				theme: 'dark'
			}}
		>
			<OrderlyAppProvider
				networkId="testnet"
				brokerId="your-broker-id"
				brokerName="your-broker-name"
				theme="dark"
				shareOptions={{
					pnl: {
						backgroundImages: [],
						fontFamily: "Arial",
						color: "#ffffff",
						profitColor: "#00ff00",
						lossColor: "#ff0000",
						brandColor: "#0000ff"
					}
				}}
				appIcons={{}}
			>
				<TradingPage 
					symbol={props.symbol} 
					tradingViewConfig={tradingViewConfig} 
					onSymbolChange={props.onSymbolChange} 
				/>
			</OrderlyAppProvider>
		</ConnectorProvider>
	);
};

export default View;