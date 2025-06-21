provider "aws" {
  region                  = "us-east-1"
  access_key              = var.aws_access_key
  secret_key              = var.aws_secret_key
  token                   = var.aws_session_token
}

resource "aws_instance" "ec2_instance" {
  ami                         = "ami-0c7217cdde317cfec" # Amazon Linux 2
  instance_type               = "t2.micro"
  key_name                    = var.key_name
  associate_public_ip_address = true

  user_data = file("${path.module}/setup.sh")

  tags = {
    Name = "lightbuild-auth"
  }
}

resource "aws_eip" "ec2_eip" {
  instance = aws_instance.ec2_instance.id
}
