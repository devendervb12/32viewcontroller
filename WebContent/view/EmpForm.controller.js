sap.ui.controller("view.EmpForm", {
	//code
	onInit : function(){
		this.getView().byId("idtitle").setText("Please...");
		this.getView().byId("idip").setValue("devender");
		this.getView().byId("idcombo").setVisible(false);
	}
});