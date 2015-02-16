/**
 * 회원가입 유효성검사
 */
$(document).ready(function() {
$.validator.setDefaults({
	errorPlacement : function(error, element) {
	  element.parent().next().empty();
		error.appendTo(element.parent().next());
	},
	onkeyup : function(element) {
		$(element).valid()
	},
	onfocusout : function(element) {
		$(element).valid()
	},
	onsubmit : true
});

$.validator.addMethod("alphanum", function(value, element) {
	return this.optional(element) || /^[a-z][a-z0-9]+$/.test(value);
});
$.validator.addMethod("korNick", function(value, element) {
	return this.optional(element) || /^[가-힣]+$/.test(value);
});

// 유효성 검사
$("#registerForm").validate(
	    {
	      rules : {
	        password : {
	          required : true,
	          minlength : 4,
	          maxlength : 10
	        },
	        password2 : {
	          required : true,
	          equalTo : "#password"
	        },
	        username : {
	          required : true,
	          minlength : 2,
	          maxlength : 6,
	          korNick : true
	        },
	        email : {
	          required : true,
	          email : true
	        }
	      },
	      messages : {
	        password : {
	          required : "비밀번호는 필수입니다.",
	          minlength : jQuery.validator
	          .format("{0}자 이상 입력하세요."),
	          maxlength : jQuery.validator
	          .format("{0}자 이하로 입력하세요.")
	        },
	        password2 : {
	          required : "비밀번호확인은 필수입니다.",
	          equalTo : "위에 입력하신 것과 다릅니다."
	        },
	        username : {
	          required : "이름은 필수입니다.",
	          minlength : jQuery.validator
	          .format("{0}자 이상 입력하세요."),
	          maxlength : jQuery.validator
	          .format("{0}자 이하로 입력하세요."),
	          korNick : "이름은 한글로 입력해주세요."
	        },
	        email : {
	          required : "이메일 주소는 필수 입니다.",
	          email : "이메일 형식에 맞게 써주세요."
	        }
	      }
	    });
});