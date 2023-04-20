import { useSelector } from "react-redux";
import { Text } from "react-native";
import { bestbuyapi_get_v1_products_list } from "../../store/bestBuyAPI/bestbuyapi_response_get_GetProductsLists.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const {
    entities: Bestbuyapi_response_get_GetProductsLists
  } = useSelector(state => state.Bestbuyapi_response_get_GetProductsLists);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bestbuyapi_get_v1_products_list());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.IqlmNOOk}>{Bestbuyapi_response_get_GetProductsLists[0].products}</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  IqlmNOOk: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled1;