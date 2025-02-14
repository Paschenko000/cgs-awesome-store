import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { useOrdersStore } from '~/shared/store/orders.store';
import { OrderItemComponent } from '~/shared/componetnts/order-item';
import React from 'react';
import { useOrders } from '~/shared/hooks/useOrders';
import { FilerComponent } from '~/shared/componetnts/filter';
import { OrdersFilterComponent } from '~/shared/componetnts/orders-filter';

export const OrdersScreen = () => {
	const orders = useOrdersStore((state) => state.orders);
	const { refreshOrders, handleRefresh, handleNextPage, isPending } =
		useOrders();

	React.useEffect(() => {
		if (isPending) return;
		refreshOrders();
	}, []);

	return (
		<View style={styles.outerContainer}>
			<View style={styles.innerContainer}>
				<OrdersFilterComponent />

				<FlatList
					contentContainerStyle={{ marginTop: 20 }}
					data={orders}
					renderItem={(order) => (
						<OrderItemComponent order={order.item} />
					)}
					refreshing={isPending}
					onRefresh={handleRefresh}
					onEndReached={handleNextPage}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item) => item.id}
					ListEmptyComponent={
						<Text style={styles.noFound}>No products found.</Text>
					}
				/>
			</View>
		</View>
	);
};
