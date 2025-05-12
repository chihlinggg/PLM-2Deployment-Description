try{
	var uesc = provider.getServiceInstance(Packages.dyna.net.service.brs.UECS.class, sid);
	uesc.getUECReportStub().createEcReportByScript();
} catch (oException) {
	if (oException instanceof Packages.dyna.common.exception.ServiceRequestException) {
		return oException;
	}
	if (oException.javaException instanceof Packages.dyna.common.exception.ServiceRequestException) {
		return oException.javaException;
	}
}
