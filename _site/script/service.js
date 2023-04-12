var script = document.createElement('script')
script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js')
document.head.appendChild(script)


var listManager;

function ListManager() {
	this.$tag_panel_organization = $('#tag_panel_organization').find('.tag_element');
	this.$tag_panel_category = $('#tag_panel_category').find('.tag_element');
	this.$tag_panel_others = $('#tag_panel_others').find('.tag_element');
	this.$listContainer = $('#services_list ul');
	this.metaData = [];
	this.filter = '';
	this.serviceItems = [];
	this.addEvents();
	this.displayReposList();
}
ListManager();

//ListManager.prototype.displayReposList = function() {
function displayReposList() {
	location.hash = 'services'
	$.get('https://api.github.com/users/dbcls/repos', function (data) {
		const repos_array = data.map(data => data.name)
		console.log(repos_array)
		$('div.service__wrapper').empty()
		for(var i = 0; i < repos_array.length; i++){
			$('div.service__wrapper')
				.append($('<div/>').attr({'class': 'repos_individual_wrapper'})
				.append('<div id="repos_name'+ i +'" class="repos_name">')
				.append('<div id="repos_image'+ i +'" class="repos_image">'))
			$('#repos_name' + i).append('<p>' + repos_array[i] + '</p>')
		}
	})
	
	this.metaData = processData(data);
	if(this.metaData) {
		this.reloadData();
	}
};

//ListManager.prototype.addEvents = function() {
function addEvents() {
	var manager = this,
		self = this;
	// タグコンソールのタグをクリックすると、フィルタリング
	$('.tag_panel .tag_element').each(function() {
		var $self = $(this)
		$self.on('click',function() {
			var dataKey = $self.attr('data-tagkey'),
					parentKinds = $self.parent().attr('id').replace('tag_panel_', '');
			if (dataKey === parentKinds + '_all') {
				// All がクリックされたら、all が on になり、それ以外は off になる
				$self.removeClass('off');
				$self.siblings().addClass('off');
			} else {
				// All 以外がクリックされたら
				$self.toggleClass("off");
				var $all = $self.siblings('.all'),
					$tags = $self.parent().children('.tag_element:not(.all)'),
					$offs = $tags.filter('.off');
				if ($offs.length === $tags.length) {
					// All 以外の全てが off であれば、All も off にする
					$all.removeClass('off');
				//offが0 == 全て選択された場合
				} else if ($offs.length === 0) {
					// 全てが on の場合、All が on になり、他は全て off にする
					$all.removeClass('off');
					$tags.addClass('off');
				} else {
					// それ以外であれば、All を off にする
					$all.addClass('off');
				}
			}
			manager.reloadData();
		});
	});
};
//ListManager.prototype.reloadData = function() {
function reloadData() {
	var tagBool = {},
			self = this;

	// 各タグが on であるかを取得
	$('.tag_panel .tag_element').each(function() {
		var tmpKey =	$(this).attr('data-tagkey');
		tagBool[tmpKey] = !this.classList.contains('off');
	})

	// フィルター
	var isCategory = function(mdata){
		var exist = false;
		if (tagBool.category_all) {
			exist = true;
		} else {
			if (mdata.featured[LANGUAGE] && tagBool.category_featured) exist = true;
			if (mdata.category1 && tagBool.category_dna) exist = true;
			if (mdata.category2 && tagBool.category_structures) exist = true;
			if (mdata.category3 && tagBool.category_textmining) exist = true;
			if (mdata.category4 && tagBool.category_dbintegration) exist = true;
		}
		return exist;
	};
	var isType = function(mdata){	
		var exist = false;
		if (tagBool.others_all) {
			exist = true;
		} else {
			if (mdata.type1 && tagBool.others_db) exist = true;
			if (mdata.type2 && tagBool.others_tool) exist = true;
			if (mdata.type3 && tagBool.others_download) exist = true;
			if (mdata.type4 && tagBool.others_submit) exist = true;
		}
		return exist;
	};
	var isOrganization = function(mdata){
		var keys = {
			DDBJ: 'organization_ddbj',
			PDBj: 'organization_pdbj',
			NBDC: 'organization_nbdc',
			DBCLS: 'organization_dbcls'
		}
		if (tagBool.organization_all) {
			return true;
		} else {
			return tagBool[keys[mdata.organization]];
		}
	};
	// データをフィルタリング
	var filteredData = _.select(this.metaData, function(mdata) {
		return ( isOrganization(mdata) && isCategory(mdata) && isType(mdata) );
	});

	// ソート
	// フィーチャーされてるサービス
	var sortedData = _.select(filteredData, function(mdata){
		return mdata.featured[LANGUAGE];
	});
	filteredData = _.difference(filteredData, sortedData);
	// カテゴリーごと
	var categorizedData = _.select(filteredData, function(mdata){
		return mdata.category1;
	});
	filteredData = _.difference(filteredData, categorizedData);
	sortedData = sortedData.concat(categorizedData);
	var categorizedData = _.select(filteredData, function(mdata){
		return mdata.category2;
	});
	filteredData = _.difference(filteredData, categorizedData);
	sortedData = sortedData.concat(categorizedData);
	var categorizedData = _.select(filteredData, function(mdata){
		return mdata.category3;
	});
	filteredData = _.difference(filteredData, categorizedData);
	sortedData = sortedData.concat(categorizedData);
	var categorizedData = _.select(filteredData, function(mdata){
		return mdata.categor4;
	});
	filteredData = _.difference(filteredData, categorizedData);
	sortedData = sortedData.concat(categorizedData);
	sortedData = sortedData.concat(filteredData);

	// サービス一覧表示
	this.displayData(sortedData);
};


/* 
 * @param targetData:Array 表示させるサービスを格納した配列
 */
function displayData(targetData) {
	// 一覧をからに
	//this.$listContainer.empty();
	this.serviceItems
	for (var i = 0; i < this.serviceItems.length; i++) {
		this.serviceItems[i].destroy();
	}
	this.serviceItems = [];
	// サービス各項の生成
	for (var i = 0; i < targetData.length; i++) {
		this.serviceItems.push(new ServiceItem(targetData[i]));
	}
};

/* サービスの各項
 */
function ServiceItem(data) {
	var self = this;
	ServiceItem.idCounter++;

	// レンダリング
	var html =
	'<li id="service-item-' + ServiceItem.idCounter + '">' +
		'<div class="service_list_box" data-article-id="">' +
			'<h2>' +
				'<span lang="ja">' + data.label.ja + '</span>' +
				'<span lang="en">' + data.label.en + '</span>' +
			'</h2>' +
			(data.category1 ? '<div class="service_category dna">DNA & RNA</div>' : '') +
			(data.category2 ? '<div class="service_category structures">Structures & Proteins</div>' : '') +
			(data.category3 ? '<div class="service_category textmining">Text-mining & Contents</div>' : '') +
			(data.category4 ? '<div class="service_category dbintegration">DB integration</div>' : '') +
			(data.type1 ? '<div class="service_type db">Database</div>' : '') +
			(data.type2 ? '<div class="service_type tool">Tool</div>' : '') +
			(data.type3 ? '<div class="service_type download">Download</div>' : '') +
			(data.type4 ? '<div class="service_type submit">Submission</div>' : '') +
			'<div class="service_list_description">' +
				'<span lang="ja">' + data.explanation.ja + '</span>' +
				'<span lang="en">' + data.explanation.en + '</span>' +
			'</div>' +
			'<div class="service_list_metadata">' +
				'<div class="service_list_inst">' + data.organization + '</div>' +
			'</div>' +
		'</div>' +
	'</li>';
	listManager.$listContainer.append(html);
	this.$ = $('#service-item-' + ServiceItem.idCounter);
	this.$title = $('h2', this.$);
	this.$expl = $('.service_list_description', this.$);
	this.$organization = $('.service_list_inst', this.$);

	// クリックをするとサービスに遷移
	this.$.on('click', function(){
		window.open(data.url[LANGUAGE], '_blank');
	});

	// フィルタリング
	$(window).on('filtering', function(e, value, re){
		if (value === '') {
			// から文字列であれば表示
			this.$.css('display', 'inline-block');
			this.$title.html('<h2>' +
				'<span lang="ja">' + data.label.ja + '</span>' +
				'<span lang="en">' + data.label.en + '</span>' +
			'</h2>');
			this.$expl.html('<div class="service_list_description">' +
				'<span lang="ja">' + data.explanation.ja + '</span>' +
				'<span lang="en">' + data.explanation.en + '</span>' +
			'</div>');
		} else {
			// そうでなければ、マッチしていれば表示
			var isMatch = false;
			var matchByTitle = data.label[LANGUAGE].match(re);
			if (matchByTitle) {
				isMatch = true;
				this.$title.html('<h2>' +
					'<span lang="ja">' + (data.label.ja.replace(re, '<em>$&</em>')) + '</span>' +
					'<span lang="en">' + (data.label.en.replace(re, '<em>$&</em>')) + '</span>' +
				'</h2>');
			}
			var matchByExpl = data.explanation[LANGUAGE].match(re);
			if (matchByExpl) {
				isMatch = true;
				this.$expl.html('<div class="service_list_description">' +
					'<span lang="ja">' + (data.explanation.ja.replace(re, '<em>$&</em>')) + '</span>' +
					'<span lang="en">' + (data.explanation.en.replace(re, '<em>$&</em>')) + '</span>' +
				'</div>');
			}
			this.$.css('display', isMatch ? 'inline-block' : 'none');
		}
	}.bind(this));

}
ServiceItem.idCounter = 0;
ServiceItem.prototype = {
	destroy: function() {
		$(window).off('filtering');
		this.$.remove();
	}
}

function ServiceMeataData(param) {
	this.label = {
		ja: param.label_ja,
		en: param.label_en
	}
	this.url = {
		ja: param.URL_ja,
		en: param.URL_en
	}
	this.explanation = {
		ja: param.explanation_ja,
		en: param.explanation_en
	}
	this.featured = {
		ja: param.Featured_ja === 'Y',
		en: param.Featured_en === 'Y'
	}
	this.organization = param.Organization;
	this.category1 = param.Category_1 === 'Y';
	this.category2 = param.Category_2 === 'Y';
	this.category3 = param.Category_3 === 'Y';
	this.category4 = param.Category_4 === 'Y';
	this.type1 = param.Type_1 === 'Y';
	this.type2 = param.Type_2 === 'Y';
	this.type3 = param.Type_3 === 'Y';
	this.type4 = param.Type_4 === 'Y';
}
	
var processData = function(data) {
	var lines = [];
	for (var i = 2; i < data.length; i++) {
		var tmpData = new ServiceMeataData({
			label_ja: data[i][0],
			URL_ja: data[i][1],
			explanation_ja: data[i][2],
			label_en: data[i][3],
			URL_en: data[i][4],
			explanation_en: data[i][5],
			Featured_ja: data[i][6],
			Featured_en: data[i][7],
			Organization: data[i][8],
			Category_1: data[i][9],
			Category_2: data[i][10],
			Category_3: data[i][11],
			Category_4: data[i][12],
			Type_1: data[i][13],
			Type_2: data[i][14],
			Type_3: data[i][15],
			Type_4: data[i][16]
		});
		lines.push(tmpData);
	}
	
	return lines;
}
