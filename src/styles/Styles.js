import { Color } from "../utils";
import color from "../utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: color.background_color,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    display: "flex",
    position: "absolute",
  },
  loaderStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.4,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: color.black,
    fontSize: 50,
    fontFamily: "Raleway-Bold",
    marginBottom: 20,
    marginTop: 150,
    marginLeft: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: color.white,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    marginLeft: 35,
  },
  inputText: {
    height: 50,
    color: color.black,
  },
  forgot: {
    color: color.black,
    fontSize: 11,
    marginLeft: 210,
    fontWeight: "bold",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: color.botton_color_1,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 35,
  },
  loginText_1: {
    color: color.black,
    marginLeft: 150,
    fontWeight: "bold",
  },
  loginText: {
    color: color.white,
    fontWeight: "bold",
  },

  ///tab navigation
  ///
  ///home page
  home_page_tab_nav: {
    flex: 1,
  },

  user_name_home: {
    fontSize: 25,
    marginBottom: 10,
    color: Color.black,
  },

  text_header_home: {
    fontSize: 15,
    marginLeft: 10,
  },

  home_tab_view: {
    backgroundColor: color.white,
    height: 130,
    width: 345,
    elevation: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginHorizontal: 7,
  },
  inputText_tab_nav: {
    height: 40,
    width: 320,
    fontSize: 15,
    marginTop: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    color: color.white,
    backgroundColor: color.search,
    elevation: 5,
  },
  icon_search_home: {
    height: 28,
    width: 28,
    tintColor: "white",
    marginLeft: 285,
    marginTop: -35,
  },

  //fast search
  fast_search: {
    marginTop: 5,
    backgroundColor: color.rose,
    width: 50,
    height: 50,
    marginHorizontal: 7,
  },
  // home tab anonce
  home_ann_box: {
    backgroundColor: color.white,
    width: 140,
    height: 200,
    marginHorizontal: 15,
    borderRadius: 25,
    elevation: 5,
    marginBottom: 5,
  },

  image_ann_home: {
    width: 120,
    height: 120,
    marginRight: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pic: {
    width: 115,
    height: 115,
    borderRadius: 20,
  },

  /// favourite page nav tab
  favourite_tab_view: {
    backgroundColor: color.white,
    height: 100,
    width: 345,
    elevation: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginHorizontal: 7,
    alignItems: "center",
  },
  my_favourite_text: {
    fontSize: 30,
    color: color.rose,
    fontStyle: "italic",
    marginTop: 20,
    fontWeight: "bold",
  },
  /// favourite ann style
  favourite_icon: {
    width: 40,
    height: 40,
    margin: 5,
    tintColor: "red",
    marginLeft: 260,
  },
  favourite_ann_zone: {
    alignItems: "center",
    marginTop: 10,
  },
  favourite_ann: {
    width: 320,
    height: 90,
    backgroundColor: color.white,
    borderRadius: 10,
    marginTop: 7,
    justifyContent: "center",
  },
  pic_ann: {
    width: 75,
    height: 75,
    marginLeft: 8,
    borderRadius: 10,
    marginRight: 5,
  },
  delet_pic: {
    width: 40,
    height: 40,
    tintColor: "red",
    marginLeft: 10,
  },

  ///animal page styles
  ///
  //// imge exemple ///
  dog_img: {
    height: 400,
    width: 360,
  },
  ////
  img_zone: {
    height: 400,
    width: 350,
  },
  backpic: {
    width: 40,
    height: 40,
    margin: 5,
  },
  header_animol_page: {
    height: 50,
  },
  icon_zone_img: {
    marginTop: -65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 70,
    paddingRight: 70,
  },
  message_icon: {
    width: 60,
    height: 60,
    tintColor: color.white,
  },
  info_zone_ann_animol: {
    marginTop: 10,
    //height: 200,
    width: 350,
    backgroundColor: Color.white,
    borderRadius: 20,
    padding: 15,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  text_info_anim_name: {
    fontSize: 30,
    color: Color.black,
  },
  text_info_anim_details: {
    fontSize: 20,
  },
  info_zone_ann_owner: {
    marginTop: 10,
    //height: 135,
    padding: 10,
    width: 350,
    backgroundColor: Color.white,
    borderRadius: 20,
    paddingLeft: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  commente_zone: {
    width: 350,
    borderRadius: 20,
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    flexDirection: "column",
  },
  add_commente: {
    height: 40,
    width: 290,
    fontSize: 15,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 50,
    color: color.black,
    backgroundColor: color.white,
    elevation: 5,
  },
  add_discription: {
    height: 60,
    width: 330,
    fontSize: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: color.black,
    backgroundColor: color.white,
    marginLeft: 5,
    borderColor: "#808080",
    borderWidth: 1,
    marginTop: 5,
  },
  send_icon: {
    width: 45,
    height: 45,
    backgroundColor: Color.botton_color_2,
    borderRadius: 50,
    justifyContent: "center",
    marginTop: 17,
    marginLeft: 5,
    elevation: 5,
  },
  commente: {
    marginTop: 10,
    //height: 100,
    width: 350,
    backgroundColor: color.white,
    borderRadius: 20,
    padding: 15,
    elevation: 5,
  },
  commente_user_name: {
    fontSize: 20,
    color: Color.black,
  },
  commente_detail: {
    fontSize: 15,
    color: Color.black,
  },

  //// add annonce  style
  ///
  title_zone: {
    backgroundColor: Color.rose,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  title_add_ann: {
    fontSize: 20,
    color: Color.white,
    fontWeight: "bold",
  },
  img_add_zone: {
    marginTop: 10,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  img_zone_ann: {
    height: 300,
    width: 320,
    backgroundColor: Color.white,
    borderRadius: 20,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  add_img: {
    width: 100,
    height: 100,
  },
  zone_info_ann: {
    backgroundColor: Color.white,
    marginTop: 10,
    padding: 10,
  },
  title_info_ann: {
    fontSize: 20,
    marginLeft: 5,
    color: color.black,
  },
  input_add_ann: {
    height: 50,
    width: "100%",
    fontSize: 15,
    marginTop: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: color.black,
    backgroundColor: color.grey_light,
  },
  input_add_ann_description: {
    height: 80,
    width: "100%",
    fontSize: 15,
    marginTop: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: color.black,
    backgroundColor: color.grey_light,
  },
  addPostBtn: {
    width: "100%",
    backgroundColor: color.rose,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10,
    //marginLeft: 35,
  },
  //// message page style
  ///
  header_mess: {
    backgroundColor: color.rose,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  header_title_mess: {
    fontSize: 20,
    color: Color.white,
    fontWeight: "bold",
  },
  search_zone: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  search_message: {
    backgroundColor: "#D3D3D3",
    width: 320,
    height: 50,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  icon_search_mess: {
    height: 30,
    width: 30,
    tintColor: "black",
    marginTop: -40,
    marginLeft: 280,
  },
  message_zone: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    width: 350,
    height: 60,
    backgroundColor: Color.white,
    marginBottom: 5,
    elevation: 2,
  },
  profil_pic_message: {
    width: 50,
    height: 50,
    marginLeft: 5,
    borderRadius: 10,
  },
  user_name_message: {
    color: color.black,
    marginLeft: 10,
    fontSize: 20,
  },
  der_message: {
    marginLeft: 10,
  },

  ///// conversation page style
  ///
  header_conv_page: {
    flexDirection: "row",
    backgroundColor: color.rose,
    height: 50,
  },
  header_conv: {
    justifyContent: "center",
    alignItems: "center",
    width: 280,
  },
  message_body: {
    backgroundColor: color.background_color,
    height: 600,
  },
  back_pic_mess: {
    width: 40,
    height: 40,
    margin: 5,
    tintColor: "white",
  },
  message_footer: {
    backgroundColor: color.white,
    height: 60,
    alignItems: "center",
  },
  input_message: {
    backgroundColor: Color.grey_light,
    width: 300,
    height: 40,
    borderRadius: 50,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  send_icon_message: {
    width: 45,
    height: 45,
    backgroundColor: Color.botton_color_2,
    borderRadius: 50,
    justifyContent: "center",
    marginTop: 5,
    marginLeft: 5,
    elevation: 5,
  },
  //// profiel page style
  ////
  header_profil: {
    backgroundColor: color.botton_color_2,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  profile_zone: {
    height: 150,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  profiel_pic: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  user_name_profil_zone: {
    justifyContent: "center",
    alignItems: "center",
  },
  user_name_profil: {
    fontSize: 40,
    fontFamily: "sans-serif-medium",
    color: color.black,
  },
  option_zone: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  profil_option: {
    backgroundColor: color.background_color,
    width: 320,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    paddingLeft: 10,
    flexDirection: "row",
    elevation: 2,
    marginBottom: 20,
  },
  option_title_zone: {
    width: 250,
  },
  option_title: {
    fontSize: 20,
    fontFamily: "sans-serif-medium",
    color: color.black,
  },
  go_pic_profile: {
    width: 30,
    height: 30,
  },
  option_title_dec: {
    fontSize: 20,
    fontFamily: "sans-serif-medium",
    color: "red",
  },
  go_pic_profile_dec: {
    width: 30,
    height: 30,
    tintColor: "red",
  },

  //// profile option style
  ////
  profile_optio_header: {
    flexDirection: "row",
    backgroundColor: color.botton_color_2,
    height: 50,
  },
  modif_info_zone: {
    paddingLeft: 25,
    marginTop: 20,
  },
  text_modif: {
    fontSize: 25,
    color: color.black,
  },
  inputText_modif: {
    marginTop: 5,
    backgroundColor: color.grey_light,
    width: 150,
    borderBottomColor: color.botton_color_2,
    borderBottomWidth: 3,
    marginRight: 10,
    borderRadius: 5,
  },
  inputText_email_modif: {
    marginTop: 5,
    backgroundColor: color.grey_light,
    width: 310,
    borderBottomColor: color.botton_color_2,
    borderBottomWidth: 3,
    marginRight: 10,
    borderRadius: 5,
  },
  botton_annuler: {
    width: 140,
    height: 50,
    backgroundColor: color.rose,
    elevation: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  botton_zone: {
    marginTop: 20,
    flexDirection: "row",
  },
  botton_text: {
    fontSize: 20,
    color: color.white,
    fontWeight: "bold",
  },
  botton_modif: {
    width: 140,
    height: 50,
    backgroundColor: color.botton_color_2,
    elevation: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
});
