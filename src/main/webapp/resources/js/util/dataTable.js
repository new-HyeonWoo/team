$(document).ready(function(){
	$("#dataTable").DataTable({
		"scrollY": 500,
		"scrollX": true,
		"lengthChange" : true,    
		"lengthMenu" : [ 200, 100, 50, 10 ],
		"language": {
            "decimal":        "",
            "emptyTable":     "데이터가 없습니다.",
            "info":           "",
            "infoEmpty":      "0 개 항목 중 0 ~ 0 개 표시",
            "infoFiltered":   "(_MAX_ 총 항목에서 필터링 됨)",
            "infoPostFix":    "",
            "thousands":      ",",
            "lengthMenu":     "_MENU_",
            "loadingRecords": "로드 중 ...",
            "processing":     "처리 중 ...",
            "search":         "검색:",
            "zeroRecords":    "일치하는 레코드가 없습니다.",
            "paginate": {
                "first":      "처음",
                "last":       "마지막",
                "next":       "다음",
                "previous":   "이전"
            },
            "aria": {
                "sortAscending":  ": 오름차순으로 정렬",
                "sortDescending": ": 내림차순으로 정렬"
            }
		}
	});
});